import { createBrowserRouter, redirect } from "react-router";
import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/Home";
import AddTask from "@/pages/AddTask";
import Tasks from "@/pages/Tasks";
import CompletedTasks from "@/pages/CompletedTasks";
import UserPage from "@/pages/UserPage";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Inbox from "@/pages/Inbox";
import { authClient } from "@/lib/auth-client";

const protectedLoader = async () => {
  const { data: session } = await authClient.getSession();
  if (!session) throw redirect("/login");
  return session;
};

const guestLoader = async () => {
  const { data: session } = await authClient.getSession();
  if (session) throw redirect("/dashboard");
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: guestLoader,
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: guestLoader,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    loader: protectedLoader,
    children: [
      {
        index: true,
        element: <Inbox />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "completed-tasks",
        element: <CompletedTasks />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
]);

export default router;

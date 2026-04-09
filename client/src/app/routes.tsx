import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/Home";
import AddTask from "@/pages/AddTask";
import Tasks from "@/pages/Tasks";
import CompletedTasks from "@/pages/CompletedTasks";
import User from "@/pages/User";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Inbox from "@/pages/Inbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
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
        element: <User />,
      },
    ],
  },
]);

export default router;

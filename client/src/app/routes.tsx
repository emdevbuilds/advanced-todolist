import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/Home";
import AddTask from "@/pages/AddTask";
import Tasks from "@/pages/Tasks";
import CompletedTasks from "@/pages/CompletedTasks";
import User from "@/pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/completed-tasks",
        element: <CompletedTasks />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export default router;

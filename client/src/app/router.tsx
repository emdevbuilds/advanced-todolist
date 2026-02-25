import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

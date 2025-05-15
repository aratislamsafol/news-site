import { createBrowserRouter, RouterProvider, } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "auth",
    element: <div>Login</div>,
  },

]);

export default router;



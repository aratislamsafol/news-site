import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loader from "../components/utlis/Loader";
import CategoryNews from "../components/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true, 
        element: <Navigate to="category/0" replace />
      },
      {
        path: "category/:id", 
        element: <CategoryNews />,
        loader: Loader('/data/news.json')
      }
    ]
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/auth",
    element: <div>Login</div>,
  },
]);

export default router;

import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loader from "../components/utlis/Loader";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

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
    path: "/news/:id",
    element: <PrivateRoute><NewsDetails /></PrivateRoute>,
    loader: Loader('/data/news.json')
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
       {
        path: "register",
        element: <Register/>
      }
    ]
  },
    {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;

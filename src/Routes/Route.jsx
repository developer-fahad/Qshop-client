// react Dom setup
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Login></Login>,
        }
      ],
    },
    {
        path: "/home",
        element: <PrivetRoute><Home></Home></PrivetRoute>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    }
  ]);

export default router
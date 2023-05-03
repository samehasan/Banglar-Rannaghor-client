/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import ServicesLayout from "../layouts/ServicesLayout/ServicesLayout";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import ServiceDetails from "./../pages/ServiceDetails/ServiceDetails";
import Register from "./../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "services",
    element: <ServicesLayout></ServicesLayout>,
    children: [
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

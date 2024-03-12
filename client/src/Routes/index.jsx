import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import About from "../pages/About.jsx";
import Layouts from "../components/Layouts/Layouts.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Form from "../pages/form/Form.jsx";
import FAQ from "../pages/faq/FAQ.jsx";
import CoursesPreview from "../pages/dashboard/CoursesPreview.jsx";

export const router = createBrowserRouter([
  {
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "/dashboard",

        element: <Dashboard />,
      },
      {
        path: "/form",

        element: <Form/>,
      },
      {
        path: "/faq",

        element: <FAQ/>,
      },
      {
        path: "/CoursesPreview",

        element: <CoursesPreview/>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",

        element: <Register />,
      },
      {
        path: "/about",

        element: <About />,
      },
    ],
  },
]);

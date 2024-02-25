import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        
        element: <Home></Home>
    },
    {
        path: "/login",
        element:<Login></Login>
    },
    {
        path:"/register",
       
        element:<Register/>
    },
    
]
    )
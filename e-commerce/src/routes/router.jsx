import { createBrowserRouter } from "react-router";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import Home from "../pages/home.jsx";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Register />

    }
])

export default router
import { createBrowserRouter } from "react-router";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import Products from "../components/products/products";
import Home from "../pages/home.jsx";
import ProductDetail from "../components/productDetail.jsx";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Register />

    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/products/:productId",
        element: <ProductDetail />
    }
])

export default router
import Comments from "./pages/Comments";
import Discounts from "./pages/Discounts";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Users from "./pages/Users";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/comments", element: <Comments /> },
    { path: "/discounts", element: <Discounts /> },
    { path: "/orders", element: <Orders /> },
    { path: "/products", element: <Products /> },
    { path: "/users", element: <Users /> },
];

export default routes;

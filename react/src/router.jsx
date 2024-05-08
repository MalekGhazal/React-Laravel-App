import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import App from "./App";

const router = createBrowserRouter([
    {
        index: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/users",
        element: <Users />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;

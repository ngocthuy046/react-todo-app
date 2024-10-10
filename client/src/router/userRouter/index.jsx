import { createBrowserRouter } from "react-router-dom";

const userRouter = createBrowserRouter([
    // Login
    {
        path: "/users/login",
        element: <Login />,
    },
    // Register
    {
        path: "/users/register",
        element: <Register />,
    },
    // Admin Panel
    {
        path: "/pages/AdminPanel",
        element: <AdminPanel />,
    },
]);

export default userRouter;
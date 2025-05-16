import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Inicial } from "./pages/store";
import { StoreLayout } from "./pages/_layouts/store";
import { Checkout } from "./pages/store/checkout";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <SignIn />
    },

    {
        path: '/',
        element: <StoreLayout />,
        children: [
            { path: '/', element: <Inicial /> },
            { path: '/checkout', element: <Checkout />}
        ]
    }
])
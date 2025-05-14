import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Inicial } from "./pages/store";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <SignIn />
    },

    {
        path: '/',
        element: <Inicial />
    }
])
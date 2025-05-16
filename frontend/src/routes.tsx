import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Inicial } from "./pages/store";
import { StoreLayout } from "./pages/_layouts/store";
import { Checkout } from "./pages/store/checkout";
import { Categories } from "./pages/store/categories";
import { Products } from "./pages/store/products";
import { Dashboard } from "./pages/admin/dashboard";
import { AdminLayout } from "./pages/_layouts/admin";

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
            { path: '/categories', element: <Categories /> },
            { path: '/checkout', element: <Checkout /> },
            { path: '/products', element: <Products /> }
        ]
    },

    {
        path: '/', 
        element: <AdminLayout />,
        children: [
            { path: '/dashboard', element: <Dashboard /> }
        ]
    }
])
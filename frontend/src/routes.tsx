import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Inicial } from "./pages/store";
import { StoreLayout } from "./pages/_layouts/store";
import { Checkout } from "./pages/store/checkout";
import { Categories } from "./pages/store/categories";
import { Products } from "./pages/store/products";
import { Dashboard } from "./pages/admin/dashboard";
import { AdminLayout } from "./pages/_layouts/admin";
import { SignUp } from "./pages/auth/sign-up";
import { AdminCategories } from "./pages/admin/admin-categories";
import { AdminSubCategories } from "./pages/admin/admin-sub-categories";
import { AdminProducts } from "./pages/admin/admin-products";
import { AdminBanners } from "./pages/admin/admin-banners";

export const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />
    },

    {
        path: '/sign-up',
        element: <SignUp />
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
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/admin/categories', element: <AdminCategories /> },
            { path: '/admin/sub-categories', element: <AdminSubCategories /> },
            { path: '/admin/products', element: <AdminProducts /> },
            { path: '/admin/banners', element: <AdminBanners /> },
        ]
    }
])
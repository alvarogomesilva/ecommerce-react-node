// routes/index.tsx
import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from '../pages/auth/sign-in'
import { SignUp } from '../pages/auth/sign-up'
import { StoreLayout } from '../pages/_layouts/store'
import { Inicial } from '../pages/shop'
import { Products } from '../pages/shop/products'
import { Categories } from '../pages/shop/categories'
import { Cart } from '../pages/shop/cart'
import { Checkout } from '../pages/shop/checkout'
import { AdminLayout } from '../pages/_layouts/admin'
import { Dashboard } from '../pages/admin/dashboard'
import { Painel } from '../pages/admin/painel'
import { AdminCategories } from '../pages/admin/admin-categories'
import { protectedLoader } from './protected-loader'

export const router = createBrowserRouter([
  {
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ]
  },

  {
    path: '/',
    element: <StoreLayout />,
    children: [
      { path: '/', element: <Inicial /> },
      { path: '/products', element: <Products /> },
      { path: '/categories', element: <Categories /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
    ],
    loader: () => protectedLoader('CUSTOMER')
  },

  {

    path: '/',
    element: <AdminLayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/painel', element: <Painel /> },
      { path: '/admin/categories', element: <AdminCategories /> },
    ],
    loader: () => protectedLoader('ADMIN')
  }


])

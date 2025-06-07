import { createBrowserRouter, Outlet } from 'react-router-dom'
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
import { AdminSubCategories } from '../pages/admin/admin-sub-categories'
import { AdminBanners } from '../pages/admin/admin-banners'
import { AdminProducts } from '../pages/admin/admin-products'
import { PrivateRoute } from './private-route'
import { Settings } from '../pages/admin/settings'
import { Blog } from '../pages/shop/blog'
import { Contacts } from '../pages/shop/contacts'
import { Profile } from '../pages/shop/profile'
import { AdminCharacteristics } from '../pages/admin/admin-characteristics'

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
      { path: '/blog', element: <Blog /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/profile', element: <Profile /> },
    ],
  },

  {
    path: '/admin',
    element: (
      <PrivateRoute requiredRole="ADMIN">
        <Outlet />
      </PrivateRoute>
    ),
    children: [
      {
        element: <AdminLayout />, // carrega somente depois da validação
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'painel', element: <Painel /> },
          { path: 'categories', element: <AdminCategories /> },
          { path: 'products', element: <AdminProducts /> },
          { path: 'sub-categories', element: <AdminSubCategories /> },
          { path: 'characteristics', element: <AdminCharacteristics /> },
          { path: 'banners', element: <AdminBanners /> },
          { path: 'settings', element: <Settings /> },
        ]
      }
    ]
  }
])

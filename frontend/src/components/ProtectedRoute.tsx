import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/auth-store'

type Props = {
  onlyAdmin?: boolean
}

export const ProtectedRoute = ({ onlyAdmin = false }: Props) => {
  const { token, user } = useAuthStore()

  if (!token) {
    return <Navigate to="/sign-in" />
  }

  if (onlyAdmin && user?.role !== 'ADMIN') {
    return <Navigate to="/" />
  }

  return <Outlet />
}

import { redirect } from 'react-router-dom'
import { useAuthStore } from '../store/use-auth-store'

export const protectedLoader = async (expectedRole?: 'CUSTOMER' | 'ADMIN') => {
  const isValid = await useAuthStore.getState().validateToken()

  const { isAuthenticated, role } = useAuthStore.getState()

  if (!isValid || !isAuthenticated) return redirect('/sign-in')
  if (expectedRole && role !== expectedRole) return redirect('/')

  return null
}

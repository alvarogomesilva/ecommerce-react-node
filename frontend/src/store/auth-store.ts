import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Auth {
  id: string
  name: string
  email: string
  role: string

}

type AuthState = {
  token: string | null
  user: Auth | null
  setAuth: (token: string, user: Auth) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: '@u',
      partialize: (state) => ({
        token: state.token
      }),
    }
  )
) 

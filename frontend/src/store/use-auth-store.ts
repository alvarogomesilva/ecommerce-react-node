// src/store/auth.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  role: 'CUSTOMER' | 'ADMIN' | null
  isAuthenticated: boolean
  login: (token: string, role: 'CUSTOMER' | 'ADMIN') => void
  logout: () => void
  validateToken: () => Promise<boolean>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      role: null,
      isAuthenticated: false,
      login: (token, role) => set({ token, role, isAuthenticated: true }),
      logout: () => set({ token: null, role: null, isAuthenticated: false }),
      validateToken: async () => {
        const token = get().token
        if (!token) return false

        try {
          const res = await fetch('http://localhost:3000/api/me', {
            headers: { Authorization: `Bearer ${token}` },
          })
          if (!res.ok) throw new Error()
          const data = await res.json()
          set({ isAuthenticated: true, role: data.role })
          return true
        } catch {
          get().logout()
          return false
        }
      },
    }),
    { name: 'auth' }
  )
)

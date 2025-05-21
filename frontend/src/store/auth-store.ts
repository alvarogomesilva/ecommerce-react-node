import { create } from 'zustand'


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

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token, user) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
}))

import { create } from "zustand";

interface User {
  id: string
  email: string
  name: string
  password: string
  role: string
  createdAt: string
  updatedAt: string
}

interface AuthState {
  token: string | null;
  user: User | null;
  setUser: (user: User) => void;
  login: (token: string, user: User) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('@t'),
  user: null,


  setUser: (user) => set({ user: user }),

  login: (token, user) => {
    set({ token: token, user: user })
    localStorage.setItem('@t', token)

    const savedToken = localStorage.getItem('@t')

    if (savedToken) {
      return true
    }

    return false
  },

  logout: () => {
    set({ token: null, user: null })
    localStorage.removeItem('@t')
  },
}));

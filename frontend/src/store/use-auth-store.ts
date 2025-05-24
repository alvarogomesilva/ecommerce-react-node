import { create } from "zustand";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  setUser: (user: User) => void;
  login: (token: string, user: User) => boolean;
  logout: () => void;
}

const getInitialToken = (): string | null => {
  if (typeof localStorage === "undefined") return null;
  return localStorage.getItem("@t");
};

const getInitialUser = (): User | null => {
  if (typeof localStorage === "undefined") return null;
  const user = localStorage.getItem("@u");
  return user ? JSON.parse(user) : null;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: getInitialToken(),
  user: getInitialUser(),

  setUser: (user) => {
    set({ user });
    localStorage.setItem("@u", JSON.stringify(user));
  },

  login: (token, user) => {
    set({ token, user });
    localStorage.setItem("@t", token);
    localStorage.setItem("@u", JSON.stringify(user));
    return true;
  },

  logout: () => {
    set({ token: null, user: null });
    localStorage.removeItem("@t");
    localStorage.removeItem("@u");
  },
}));

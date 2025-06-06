import { create } from "zustand";
import { getStore } from "../api/stores/get-store";
import { toast } from "sonner";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface Store {
  id: string
  name: string
  title: string | null
  email: string | null
  color: string | null
  whatsapp: string | null
  phone: string | null
  address: string | null
  logo: string | null
  adminId: string
  createdAt: Date
  updatedAt: Date
}

interface AuthState {
  token: string | null;
  user: User | null;
  store: Store | null;
  setUser: (user: User, store: Store) => void;
  setStore: (store: Store) => void;
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
  store: null,

  setUser: (user, store) => {
    set({ user, store });
    localStorage.setItem("@u", JSON.stringify(user));
  },

  setStore: (store) => {
    set({ store })
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
    toast.message('Deslogado', {
      description: 'Usuário deslogado com sucesso',
    })
  },
}));

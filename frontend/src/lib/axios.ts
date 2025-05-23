import axios from "axios";
import { useAuthStore } from "../store/use-auth-store";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Aplica o token a cada requisição
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Intercepta erros 401 (unauthorized)
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const logout = useAuthStore.getState().logout
    if (err.response?.status === 401) {
      logout()
    }
    return Promise.reject(err)
  }
)
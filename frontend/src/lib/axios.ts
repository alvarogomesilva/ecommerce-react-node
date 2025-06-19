import axios from "axios";
import { useAuthStore } from "../store/use-auth-store";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
})

// Interceptor de requisição (adiciona o token)
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


//Interceptor de resposta (detecta token expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      const { logout } = useAuthStore.getState();
      logout(); // limpa Zustand
      window.location.href = "/sign-in";
    }

    return Promise.reject(error);
  }
);
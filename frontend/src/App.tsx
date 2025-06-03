import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { useEffect } from "react";
import { getStore } from "./api/stores/get-store";
import { useAuthStore } from "./store/use-auth-store";


export function App() {
  const { setStore } = useAuthStore()

  useEffect(() => {
    async function getConfigStore() {
      const store = await getStore()

      setStore(store)
    }

    return () => { getConfigStore() }
  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

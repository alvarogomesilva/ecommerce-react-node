import { useEffect, useState } from "react"
import { getCategories, type GetCategoriesResponse } from "../api/get-categories"

export const useCategories = () => {
  const [categories, setCategories] = useState<GetCategoriesResponse[]>([])

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await getCategories()
        setCategories(response)
      } catch (error) {
        console.error("Erro ao carregar categorias:", error)
      }
    }

    loadCategories()
  }, [])

  return { categories }
}

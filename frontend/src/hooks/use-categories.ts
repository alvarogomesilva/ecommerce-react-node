import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { categorySchema, type CategoryInput } from "../validations/categorySchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { createCategory } from "../api/categories/create-category"
import { useRef } from "react"
import { toast } from "sonner"
import type { Category } from "../types/category"
import { getCategories } from "../api/categories/get-categories"
import { deleteCategory } from "../api/categories/delete-category"

export const useCategories = () => {
  const queryClient = useQueryClient()
  const createModalRef = useRef<HTMLButtonElement>(null)
  const deleteModalRef = useRef<HTMLButtonElement>(null)

  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: ""
    }
  })

  // BUSCAR TODAS AS CATEGORIAS
  const { data } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  // CRIAR NOVA CATEGORIA
  const createMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      form.reset();
    },
  })


 const onSubmit = async (data: CategoryInput) => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      createMutation.mutate(data);

      createModalRef.current?.click()

      toast.message('Cadastro de Categoria', {
        description: "Categoria Cadastrada com sucesso"
      })
  };


  // DELETAR A CATEGORIA
  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["categories"] })
  });

  return {
    categories: data ?? [],
    form,
    createModalRef,
    onSubmit,
    deleteModalRef,
    deleteCategory: deleteMutation.mutate,
    isPendingDelete: deleteMutation.isPending,
  }
}
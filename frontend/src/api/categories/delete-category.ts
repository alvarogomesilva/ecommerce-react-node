import { api } from "../../lib/axios"

export interface DeleteCategoryBody {
    id: string
}


export async function deleteCategory({
    id
}: DeleteCategoryBody) {
    await api.delete(`/categories/${id}`)
}
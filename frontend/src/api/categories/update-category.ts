import { api } from "../../lib/axios"

export interface UpdateCategoryBody {
    id: string
    name: string
}

export async function updateCategory({ id, name }: UpdateCategoryBody) {
    const response = await api.patch(`/categories/${id}`, { name })
    return response.data
}
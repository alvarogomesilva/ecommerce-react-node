import { api } from "../../lib/axios"


export interface GetCategoriesResponse {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

export async function getCategories() {
    const response = await api.get<GetCategoriesResponse[]>('/categories')
    
    return response.data
}
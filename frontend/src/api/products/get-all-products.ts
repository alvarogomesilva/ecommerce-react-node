import { api } from "../../lib/axios"

export interface GetAllProducts {
    id: string
    name: string
    price: number
    description: string
    control_stock: boolean
    active: boolean
    link: string
    categoryId: string
    subCategoryId: string
    createdAt: Date
    updatedAt: Date
}

export async function getAllProducts() {
    const response = await api.get<GetAllProducts[]>('/products')
    return response.data
}
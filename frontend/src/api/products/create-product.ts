import { api } from "../../lib/axios"

interface CreateProductBody {
    active: boolean
    control_stock: boolean
    name: string
    price: number
    categoryId: string
}

export async function createProduct(data: CreateProductBody) {
    const response = await api.post('/products', data) 
    return response.data
}
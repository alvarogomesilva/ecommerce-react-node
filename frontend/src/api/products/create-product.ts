import { api } from "../../lib/axios"

export interface CreateProductBody {
    active: boolean
    control_stock: boolean
    name: string
    price: number | string
    categoryId: string
    image: string
}

export async function createProduct(data: FormData) {
    const response = await api.post('/products', data ,{
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }) 
    return response.data
}
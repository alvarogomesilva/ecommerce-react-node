import { api } from "../../lib/axios"
import type { Product } from "../../types/product"

interface ListOneProductRequest {
    id: string
}

export async function listOneProduct({ id }: ListOneProductRequest): Promise<Product> {
    const response = await api.get(`/products/${id}`)
    return response.data
}
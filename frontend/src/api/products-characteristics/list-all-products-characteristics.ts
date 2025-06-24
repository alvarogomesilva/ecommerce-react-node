import { api } from "../../lib/axios";


export async function listAllCharacteristics(productId: string) {
    const response = await api.get(`/product-characteristics/${productId}`)
    return response.data
}
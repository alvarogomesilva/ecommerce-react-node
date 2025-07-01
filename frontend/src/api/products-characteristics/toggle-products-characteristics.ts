import { api } from "../../lib/axios";


export async function toggleActive(id: string) {
    const response = await api.patch(`/product-characteristics/${id}`)
    return response.data
}
import { api } from "../../lib/axios"

interface GetStoreResponse {
    id: string
    name: string
    title: string | null
    email: string | null
    color: string | null
    whatsapp: string | null
    phone: string | null
    address: string | null
    logo: string | null
    adminId: string
    createdAt: Date
    updatedAt: Date
}

export async function getStore() {
    const response = await api.get<GetStoreResponse>(`/stores/${import.meta.env.VITE_STORE}`)
    return response.data
}
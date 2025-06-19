import { api } from "../../lib/axios"

export interface GetAllCharacteristics {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

export async function getAllCharacteristics() {
    const response = await api.get<GetAllCharacteristics[] | null>('/characteristics')
    return response.data
} 
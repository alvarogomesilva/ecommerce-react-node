import { api } from "../lib/axios"

interface UpdateStoreBody {
    id: string
    data: object
}

export async function updateStore({
    id,
    data
}: UpdateStoreBody) {
    const response = await api.patch('/stores', {
        id,
        data
    })

    return response.data
}
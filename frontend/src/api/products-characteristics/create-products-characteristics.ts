import { api } from "../../lib/axios";

interface CreateProductCharacteristicBody {
    productId: string
    characteristicId: string
    description: string
    addition?: string
    hex_value?: string
}


export async function createProductCharacteristic(data: CreateProductCharacteristicBody) {
    const response = await api.post('/product-characteristics', data)

    return response.data
}
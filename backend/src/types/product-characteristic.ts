
export type ProductCharacteristic = {
    id?: string
    productId: string
    characteristicId: string
    description: string 
    addition: number | null
    hex_value: string | null
}

export interface CreateProductCharacteristicDto {
    productId: string
    characteristicId: string
    description: string
    addition?: number
    hex_value?: string
}
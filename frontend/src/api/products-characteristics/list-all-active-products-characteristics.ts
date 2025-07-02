import { api } from "../../lib/axios";


export interface Characteristics {
  id: string
  active: boolean
  description: string
  addition: number
  hex_value: string
}


export type CharacteristicsResponse = {
  [key: string]: Characteristics[];
}

export async function listAllActiveCharacteristics(productId: string) {
  try {
    const response = await api.get<CharacteristicsResponse>(`/product-characteristics/active/${productId}`)
    return response.data
  } catch (error) {
    
    console.log()
  }
}

import { CharacteristicRepository } from "../../repositories/characteristic-repository"
import { ProductCharacteristicRepository } from "../../repositories/product-characteristic-repository"
import { Characteristic } from "../../types/characteristic"



interface ListCharacteristicByProductUseCaseRequest {
    id: string
}

interface ListCharacteristicByProductUseCaseResponse {
    listAll: any
}

export class ListCharacteristicByProductUseCase {
    constructor(private productCharacteristic: ProductCharacteristicRepository) { }

    async execute({
        id }: ListCharacteristicByProductUseCaseRequest):
        Promise<ListCharacteristicByProductUseCaseResponse> {
        const listAll = await this.productCharacteristic.listCharacteristicByProduct(id)

        return {
            listAll
        }
    }
}
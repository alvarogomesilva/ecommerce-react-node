import { CharacteristicRepository } from "../../repositories/characteristic-repository"
import { ProductCharacteristicRepository } from "../../repositories/product-characteristic-repository"
import { Characteristic } from "../../types/characteristic"



interface ListAllActiveCharacteristicByProductUseCaseRequest {
    id: string
}

interface ListAllActiveCharacteristicByProductUseCaseResponse {
    listAllActive: any
}

export class ListAllActiveCharacteristicByProductUseCase {
    constructor(private productCharacteristic: ProductCharacteristicRepository) { }

    async execute({
        id }: ListAllActiveCharacteristicByProductUseCaseRequest):
        Promise<ListAllActiveCharacteristicByProductUseCaseResponse> {

        const listAllActive = await this.productCharacteristic.listAllActiveCharacteristicByProduct(id)

        return {
            listAllActive
        }
    }
}
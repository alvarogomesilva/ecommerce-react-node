import { ResourceNotFoundError } from "../../errors/resource-not-found-error"
import { ProductCharacteristicRepository } from "../../repositories/product-characteristic-repository"
import { ProductCharacteristic } from "../../types/product-characteristic"

interface DisableProductCharacteristicUseCaseRequest {
    id: string
}

interface DisableProductCharacteristicUseCaseResponse {
    productCharacteristic: ProductCharacteristic
}

export class DisableProductCharacteristicUseCase {
    constructor(private productCharacteristic: ProductCharacteristicRepository) { }

    async execute({ id }: DisableProductCharacteristicUseCaseRequest): Promise<DisableProductCharacteristicUseCaseResponse> {

        const findProductCharacteristic = await this.productCharacteristic.listOneProductCharacteristic(id)

        if (!findProductCharacteristic) {
            throw new ResourceNotFoundError()
        }

        const productCharacteristic = await this.productCharacteristic.disableProductCharacteristic(id)

        return {
            productCharacteristic
        }

    }
}
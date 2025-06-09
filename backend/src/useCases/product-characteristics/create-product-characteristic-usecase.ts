import { ProductCharacteristicRepository } from "../../repositories/product-characteristic-repository"
import { CreateProductCharacteristicDto, ProductCharacteristic } from "../../types/product-characteristic"

interface CreateProductCharacteristicUseCaseRequest {
    data: CreateProductCharacteristicDto
}

interface CreateProductCharacteristicUseCaseResponse {
    productCharacteristic: ProductCharacteristic
}

export class CreateProductCharacteristicUseCase {
    constructor(private productCharacteristic: ProductCharacteristicRepository) { }

    async execute({ data }: CreateProductCharacteristicUseCaseRequest): Promise<CreateProductCharacteristicUseCaseResponse> {

        const productCharacteristic = await this.productCharacteristic.create(data)

        return {
            productCharacteristic
        }

    }
}
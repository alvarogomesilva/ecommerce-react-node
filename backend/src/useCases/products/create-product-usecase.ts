import { ProductRepository } from "../../repositories/product-repository"
import { CreateProductDto, Product } from "../../types/product"


interface CreateProductUseCaseRequest {
    data: CreateProductDto,
    image: string | null
}

interface CreateProductUseCaseResponse {
    product: Product
}

export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute({ data, image }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {

        const product = await this.productRepository.create(data, image)

        return {
            product
        }

    }
}
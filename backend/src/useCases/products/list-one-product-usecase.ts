
import { ProductRepository } from "../../repositories/product-repository";
import { Product } from "../../types/product";


interface ListOneProductUseCaseRequest {
    id: string
}

interface ListOneProductUseCaseResponse {
    listOneProduct: Product | null
}

export class ListOneProductUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute({ id }: ListOneProductUseCaseRequest): Promise<ListOneProductUseCaseResponse> {
        const listOneProduct = await this.productRepository.listOne(id)

    
        return {
            listOneProduct
        }
    }
}
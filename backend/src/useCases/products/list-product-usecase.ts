import { ProductRepository } from "../../repositories/product-repository";
import { Product } from "../../types/product";


interface ListProductsUseCaseResponse {
    listAllProducts: Product[] | null
}

export class ListProductsUseCase {
    constructor(private productRepository: ProductRepository) {}

    async execute(): Promise<ListProductsUseCaseResponse> {
        const listAllProducts = await this.productRepository.listAll()

    
        return {
            listAllProducts
        }
    }
}
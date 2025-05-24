import { CategoryRepository } from "../../repositories/category-repository";
import { Category } from "../../types/category";


interface CreateCategoryUseCaseRequest {
    name: string
}

interface CreateCategoryUseCaseResponse {
    category: Category
}

export class CreateCategoryUseCase {
    constructor (private categoryRepository: CategoryRepository) {}

    async execute({ name }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
        
        const category = await this.categoryRepository.create(name)

        return {
            category
        }

    }
}
import { CategoryRepository } from "../../repositories/category-repository";
import { Category } from "../../types/category";


interface UpdateCategoryUseCaseRequest {
    id: string
    name: string
}

interface UpdateCategoryUseCaseResponse {
    category: Category
}

export class UpdateCategoryUseCase {
    constructor (private categoryRepository: CategoryRepository) {}

    async execute({ id, name }: UpdateCategoryUseCaseRequest): Promise<UpdateCategoryUseCaseResponse> {
        
        const category = await this.categoryRepository.update(id, name)

        return {
            category
        }

    }
}
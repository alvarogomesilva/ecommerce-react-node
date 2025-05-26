import { CategoryRepository } from "../../repositories/category-repository";
import { Category } from "../../types/category";

interface DeleteCategoryUseCaseRequest {
    id: string
}

interface DeleteCategoryUseCaseResponse {
    category: Category
}

export class DeleteCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute({ id }: DeleteCategoryUseCaseRequest): Promise<DeleteCategoryUseCaseResponse> {
        const category = await this.categoryRepository.delete(id)

        return {
            category
        }
    }
}
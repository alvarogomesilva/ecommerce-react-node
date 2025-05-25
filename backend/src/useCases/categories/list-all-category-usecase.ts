import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import { CategoryRepository } from "../../repositories/category-repository";
import { Category } from "../../types/category";

interface ListAllCategoriesUseCaseRequest {
    name: string
}

interface ListAllCategoriesUseCaseResponse {
    listAllCategories: Category[] | null
}

export class ListAllCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async execute(): Promise<ListAllCategoriesUseCaseResponse> {
        const listAllCategories = await this.categoryRepository.listAll()

    
        return {
            listAllCategories
        }
    }
}
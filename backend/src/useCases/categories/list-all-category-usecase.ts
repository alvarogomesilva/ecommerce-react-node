import { CategoryRepository } from "../../repositories/category-repository";
import { Category } from "../../types/category";

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
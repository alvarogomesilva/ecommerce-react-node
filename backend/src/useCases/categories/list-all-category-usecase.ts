import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import { CategoryRepository } from "../../repositories/category-repository";
import { Category } from "../../types/category";

interface ListAllCategoriesUseCaseRequest {
    name: string
}

interface ListAllCategoriesUseCaseResponse {
    categories: Category[]
}

export class ListAllCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async execute(): Promise<ListAllCategoriesUseCaseResponse> {
        const categories = await this.categoryRepository.listAll()

        if (!categories) {
            throw new ResourceNotFoundError()
        }

        return {
            categories
        }
    }
}
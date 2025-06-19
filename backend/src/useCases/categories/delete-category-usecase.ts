import { ForeignKeyConstraintError } from "../../errors/foreign-key-constraint-error";
import { CategoryRepository } from "../../repositories/category-repository";
import { ProductRepository } from "../../repositories/product-repository";
import { Category } from "../../types/category";

interface DeleteCategoryUseCaseRequest {
    id: string
}

interface DeleteCategoryUseCaseResponse {
    category: Category
}

export class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: CategoryRepository
    ) { }

    async execute({ id }: DeleteCategoryUseCaseRequest): Promise<DeleteCategoryUseCaseResponse> {

        const categoryInUse = await this.categoryRepository.listOneProduct(id)

        if (categoryInUse) {
            throw new ForeignKeyConstraintError()
        }

        const category = await this.categoryRepository.delete(id)

        return {
            category
        }
    }
}
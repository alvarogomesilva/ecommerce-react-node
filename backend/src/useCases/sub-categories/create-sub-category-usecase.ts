import { SubCategoryRepository } from "../../repositories/sub-category-repository"
import { SubCategory } from "../../types/sub-category"


interface CreateSubCategoryUseCaseRequest {
    name: string
    categoryId: string
}

interface CreateSubCategoryUseCaseReponse {
    subCategories: SubCategory
}


export class CreateSubCategoryUseCase {
    constructor (private subCategoryRepository: SubCategoryRepository) {}
    async execute({ name, categoryId }: CreateSubCategoryUseCaseRequest): Promise<CreateSubCategoryUseCaseReponse> {

        const subCategories = await this.subCategoryRepository.create({ name, categoryId })

        return {
            subCategories
        }
    }
}
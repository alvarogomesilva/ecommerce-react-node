import { CreateSubCategoryDto, SubCategory } from "../types/sub-category";

export abstract class SubCategoryRepository {
    abstract create(data: CreateSubCategoryDto): Promise<SubCategory>
}
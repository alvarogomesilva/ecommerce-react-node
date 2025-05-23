import { Category } from "../types/category";

export abstract class CategoryRepository {
    abstract create(name: string): Promise<Category>
}
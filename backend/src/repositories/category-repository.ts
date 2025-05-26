import { Category } from "../types/category";

export abstract class CategoryRepository {
    abstract create(name: string): Promise<Category>
    abstract listAll(): Promise<Category[] | null>
    abstract delete(id: string): Promise<Category>
}
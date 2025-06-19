import { Category } from "../types/category";
import { Product } from "../types/product";

export abstract class CategoryRepository {
    abstract create(name: string): Promise<Category>
    abstract listAll(): Promise<Category[] | null>
    abstract update(id: string, name: string): Promise<Category>
    abstract delete(id: string): Promise<Category>

    abstract listOneProduct(id: string): Promise<Product | null>
}
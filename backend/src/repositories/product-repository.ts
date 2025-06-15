import { CreateProductDto, Product } from "../types/product";

export abstract class ProductRepository {
    abstract create(data: CreateProductDto, image: string | null): Promise<Product>
    abstract listAll(): Promise<Product[] | null>
}
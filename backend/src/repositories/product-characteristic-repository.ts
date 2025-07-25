import { CreateProductCharacteristicDto, ProductCharacteristic } from "../types/product-characteristic";

export abstract class ProductCharacteristicRepository {
    abstract create(data: CreateProductCharacteristicDto): Promise<ProductCharacteristic>
    abstract listCharacteristicByProduct(id: string): Promise<any>

    abstract listAllActiveCharacteristicByProduct(id: string): Promise<any>

    abstract listOneProductCharacteristic(id: string): Promise<any>
    abstract disableProductCharacteristic(id: string): Promise<any>
}
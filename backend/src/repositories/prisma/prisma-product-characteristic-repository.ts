import { prisma } from "../../lib/prisma";
import { CreateProductCharacteristicDto } from "../../types/product-characteristic";
import { ProductCharacteristicRepository } from "../product-characteristic-repository";

export class PrismaProductCharacteristicRepository implements ProductCharacteristicRepository{

    async create(data: CreateProductCharacteristicDto) {
        return await prisma.productCharacteristic.create({
            data
        })
    }
}
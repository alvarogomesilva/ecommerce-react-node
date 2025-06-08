import { prisma } from "../../lib/prisma";
import { CreateProductDto, Product } from "../../types/product";
import { ProductRepository } from "../product-repository";

export class PrismaProductRepository implements ProductRepository {

    async create(data: CreateProductDto) {
        return await prisma.product.create({
            data
        })
    }
}
import { prisma } from "../../lib/prisma";
import { CreateProductDto, Product } from "../../types/product";
import { ProductRepository } from "../product-repository";

export class PrismaProductRepository implements ProductRepository {

    async create(data: CreateProductDto) {
        return await prisma.product.create({
            data
        })
    }

    async listAll() {
        const products = await prisma.product.findMany()

        if (products.length > 0) {
            return products
        }

        return null
    }
}
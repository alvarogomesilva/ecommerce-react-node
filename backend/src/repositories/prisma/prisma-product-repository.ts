import { prisma } from "../../lib/prisma";
import { CreateProductDto, Product } from "../../types/product";
import { ProductRepository } from "../product-repository";

export class PrismaProductRepository implements ProductRepository {

    async create(data: CreateProductDto, image: string) {
        return await prisma.product.create({
            data: {
                name: data.name,
                control_stock: data.control_stock,
                categoryId: data.categoryId,
                price: data.price,
                description: data.description,
                image: image,
                link: data.link,
                subCategoryId: data.subCategoryId,
                active: data.active
            }
        })
    }

    async listAll() {
        const products = await prisma.product.findMany()

        if (products.length > 0) {
            return products
        }

        return null
    }

    async listOne(id: string) {
        return await prisma.product.findFirst({
            where: { id }
        })
    }
}
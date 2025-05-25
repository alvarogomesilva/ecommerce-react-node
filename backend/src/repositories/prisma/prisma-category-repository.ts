import { prisma } from "../../lib/prisma";
import { Category } from "../../types/category";
import { CategoryRepository } from "../category-repository";

export class PrismaCategoryRepository implements CategoryRepository {

    async create(name: string) {
        return prisma.categories.create({
            data: { name }
        })
    }

    async listAll() {
        const categories = await prisma.categories.findMany()

        if (categories.length > 0) {
            return categories
        }

        return null
    }
}
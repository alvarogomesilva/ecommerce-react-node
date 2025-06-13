import { prisma } from "../../lib/prisma";
import { Category } from "../../types/category";
import { CategoryRepository } from "../category-repository";

export class PrismaCategoryRepository implements CategoryRepository {

    async create(name: string) {
        return prisma.categories.create({
            data: { name }
        })
    }

    async update(id: string, name: string) {
        return await prisma.categories.update({
            data: {
                name
            },
            where: {
                id
            }
        })
    }

    async listAll() {
        const categories = await prisma.categories.findMany()

        if (categories.length > 0) {
            return categories
        }

        return null
    }

    async delete(id: string) {
        return prisma.categories.delete({
            where: { id }
        })
    }
}
import { prisma } from "../../lib/prisma";
import { CategoryRepository } from "../category-repository";

export class PrismaCategoryRepository implements CategoryRepository {

    async create(name: string) {
        return prisma.categories.create({
            data: { name }
        })
    }
}
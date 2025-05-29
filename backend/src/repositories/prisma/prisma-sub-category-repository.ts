import { prisma } from "../../lib/prisma";
import { CreateSubCategoryDto, SubCategory } from "../../types/sub-category";
import { SubCategoryRepository } from "../sub-category-repository";

export class PrismaSubCategoryRepository implements SubCategoryRepository {
    async create(data: CreateSubCategoryDto) {
        return await prisma.subCategories.create({
            data
        })
    }
}
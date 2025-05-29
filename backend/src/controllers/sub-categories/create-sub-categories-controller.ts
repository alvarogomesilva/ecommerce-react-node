import { Request, Response } from "express";
import { PrismaSubCategoryRepository } from "../../repositories/prisma/prisma-sub-category-repository";
import { CreateSubCategoryUseCase } from "../../useCases/sub-categories/create-sub-category-usecase";

export async function create(request: Request, response: Response) {
    try {
        const { name, categoryId } = request.body

        const prismaSubCategoryRepository = new PrismaSubCategoryRepository()
        const createSubCategoryUseCase = new CreateSubCategoryUseCase(prismaSubCategoryRepository)

        const { subCategories } = await createSubCategoryUseCase.execute({
            name,
            categoryId
        })
        response.status(201).send(subCategories)
    } catch (error) {
        console.log(error)
    }
}
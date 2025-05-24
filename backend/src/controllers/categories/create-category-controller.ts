import { z } from "zod";
import { PrismaCategoryRepository } from "../../repositories/prisma/prisma-category-repository";
import { CreateCategoryUseCase } from "../../useCases/categories/create-category-usecase";
import { Request, Response } from "express";

export async function create(request: Request, response: Response) {
    const createCategoryBodySchema = z.object({
        name: z.string()
    })

    try {

        const { name } = createCategoryBodySchema.parse(request.body)

        const prismaCategoryRepository = new PrismaCategoryRepository()
        const createCategoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository)

        const { category } = await createCategoryUseCase.execute({
            name
        })

        response.status(201).send(category)
    } catch (error) {
        console.log(error)
    }
}
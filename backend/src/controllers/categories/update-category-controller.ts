import { z } from "zod";
import { PrismaCategoryRepository } from "../../repositories/prisma/prisma-category-repository";
import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "../../useCases/categories/update-category-usecase";

export async function update(request: Request, response: Response) {
    const createCategoryBodySchema = z.object({
        name: z.string()
    })

    try {
        const id = request.params.id as string
        const { name } = createCategoryBodySchema.parse(request.body)

        const prismaCategoryRepository = new PrismaCategoryRepository()
        const updateCategoryUseCase = new UpdateCategoryUseCase(prismaCategoryRepository)

        const { category } = await updateCategoryUseCase.execute({
            id,
            name
        })

        response.status(201).send(category)
    } catch (error) {
        console.log(error)
    }
}
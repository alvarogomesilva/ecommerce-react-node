import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "../../useCases/categories/delete-category-usecase";
import { PrismaCategoryRepository } from "../../repositories/prisma/prisma-category-repository";
import { z } from "zod";
import { ForeignKeyConstraintError } from "../../errors/foreign-key-constraint-error";

export async function remove(request: Request, response: Response) {
   

    try {
        const id = request.params.id as string

        const prismaCategoryRepository = new PrismaCategoryRepository()
        const deleteCategoryUseCase = new DeleteCategoryUseCase(prismaCategoryRepository)

        const { category } = await deleteCategoryUseCase.execute({
            id
        })

        response.status(200).send(category)
    } catch (error) {

        if (error instanceof ForeignKeyConstraintError) {
            response.status(409).json({ message: 'Essa categoria está vinculada a um produto!' })
        }

    }
}
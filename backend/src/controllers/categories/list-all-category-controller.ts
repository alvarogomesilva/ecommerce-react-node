import { z } from "zod";
import { PrismaCategoryRepository } from "../../repositories/prisma/prisma-category-repository";
import { ListAllCategoryUseCase } from "../../useCases/categories/list-all-category-usecase";
import { Request, Response } from "express";

export async function listAll(request: Request, response: Response) {
  
    try {

        const prismaCategoryRepository = new PrismaCategoryRepository()
        const listAllCategoryUseCase = new ListAllCategoryUseCase(prismaCategoryRepository)

        const { categories } = await listAllCategoryUseCase.execute()

        response.status(200).send(categories)
    } catch (error) {
        console.log(error)
    }
}
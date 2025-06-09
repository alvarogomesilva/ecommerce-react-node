

import { Request, Response } from "express";
import { PrismaProductRepository } from "../../repositories/prisma/prisma-product-repository";
import { ListProductsUseCase } from "../../useCases/products/list-product-usecase";

export async function listAll(request: Request, response: Response) {
  
    try {

        const prismaProductRepository = new PrismaProductRepository()
        const listAllProductsUseCase = new ListProductsUseCase(prismaProductRepository)

        const { listAllProducts } = await listAllProductsUseCase.execute()

        response.status(200).send(listAllProducts)
    } catch (error) {
        console.log(error)
    }
}
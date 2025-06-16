import { Request, Response } from "express";
import { PrismaProductRepository } from "../../repositories/prisma/prisma-product-repository";
import { ListOneProductUseCase } from "../../useCases/products/list-one-product-usecase";


export async function listOne(request: Request, response: Response) {
  
    try {
        const id = request.params.id as string

        const prismaProductRepository = new PrismaProductRepository()
        const listOneProductUseCase = new ListOneProductUseCase(prismaProductRepository)

        const { listOneProduct } = await listOneProductUseCase.execute({
            id
        })

        response.status(200).send(listOneProduct)
    } catch (error) {
        console.log(error)
    }
}
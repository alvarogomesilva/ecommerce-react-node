import { z } from "zod";
import { Request, Response } from "express";
import { PrismaProductRepository } from "../../repositories/prisma/prisma-product-repository";
import { CreateProductUseCase } from "../../useCases/products/create-product-usecase";

export async function create(request: Request, response: Response) {
    const createProductBodySchema = z.object({
        name: z.string(),
        price: z.number(),
        description: z.string().optional(),
        categoryId: z.string(),
        link: z.string().optional(),
        subCategoryId: z.string().optional(),
        control_stock: z.boolean(),
        active: z.boolean()
    })

    try {

        const data = createProductBodySchema.parse(request.body)

        const prismaProductRepository = new PrismaProductRepository()
        const createProductoUseCase = new CreateProductUseCase(prismaProductRepository)

        const { product } = await createProductoUseCase.execute({
            data
        })

        response.status(201).send(product)
    } catch (error) {
        console.log(error)
    }
}
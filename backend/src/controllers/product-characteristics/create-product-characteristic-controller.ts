import { Request, Response } from "express";
import { PrismaProductCharacteristicRepository } from "../../repositories/prisma/prisma-product-characteristic-repository";
import { CreateProductCharacteristicUseCase } from "../../useCases/product-characteristics/create-product-characteristic-usecase";
import { z } from "zod";

export async function create(request: Request, response: Response) {

    const createProductCharacteristicSchema = z.object({
        productId: z.string(),
        characteristicId: z.string(),
        description: z.string(),
        addition: z.coerce.number().optional(),
        hex_value: z.string().optional()
    })

    try {
        const data = createProductCharacteristicSchema.parse(request.body)

        const prismaProductCharacteristicRepository = new PrismaProductCharacteristicRepository()
        const createProductCharacteristicUseCase = new CreateProductCharacteristicUseCase(prismaProductCharacteristicRepository)

        const { productCharacteristic } = await createProductCharacteristicUseCase.execute({
            data
        })

        response.status(201).send(productCharacteristic)
    } catch (error) {
        console.log(error)
    }
}
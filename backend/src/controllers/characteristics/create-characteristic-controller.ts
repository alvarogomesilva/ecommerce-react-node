import { z } from "zod";
import { Request, Response } from "express";
import { PrismaCharacteristicRepository } from "../../repositories/prisma/prisma-characteristic-repository";
import { CreateCharacteristicUseCase } from "../../useCases/characteristics/create-characteristic-usecase";

export async function create(request: Request, response: Response) {
    const createCharacteristicBodySchema = z.object({
        name: z.string()
    })

    try {

        const { name } = createCharacteristicBodySchema.parse(request.body)

        const prismaCharacteristicRepository = new PrismaCharacteristicRepository()
        const createCharacteristicUseCase = new CreateCharacteristicUseCase(prismaCharacteristicRepository)

        const { characteristic } = await createCharacteristicUseCase.execute({
            name
        })

        response.status(201).send(characteristic)
    } catch (error) {
        console.log(error)
    }
}
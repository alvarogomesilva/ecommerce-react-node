import { Request, Response } from "express";
import { PrismaProductCharacteristicRepository } from "../../repositories/prisma/prisma-product-characteristic-repository";
import { ListCharacteristicByProductUseCase } from "../../useCases/product-characteristics/list-product-characteristic-usecase";

export async function listAll(request: Request, response: Response) {

    try {
        const id = request.params.id

        const prismaProductCharacteristicRepository = new PrismaProductCharacteristicRepository()
        const listCharacteristicByProductUseCase = new ListCharacteristicByProductUseCase(prismaProductCharacteristicRepository)

        const { listAll } = await listCharacteristicByProductUseCase.execute({
            id
        })

        response.status(200).send(listAll)
    } catch (error) {
        console.log(error)
    }
}
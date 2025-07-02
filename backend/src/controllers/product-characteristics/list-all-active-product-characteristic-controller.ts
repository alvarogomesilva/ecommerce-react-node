import { Request, Response } from "express";
import { PrismaProductCharacteristicRepository } from "../../repositories/prisma/prisma-product-characteristic-repository";
import { ListAllActiveCharacteristicByProductUseCase } from "../../useCases/product-characteristics/list-all-active-product-characteristic-usecase";


export async function listAllActive(request: Request, response: Response) {

    try {
        const id = request.params.id

        const prismaProductCharacteristicRepository = new PrismaProductCharacteristicRepository()
        const listAllActiveCharacteristicByProductUseCase = new ListAllActiveCharacteristicByProductUseCase(prismaProductCharacteristicRepository)

        const { listAllActive } = await listAllActiveCharacteristicByProductUseCase.execute({
            id
        })

        response.status(200).send(listAllActive)
    } catch (error) {
        console.log(error)
    }
}
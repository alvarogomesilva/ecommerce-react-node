import { Request, Response } from "express";
import { PrismaProductCharacteristicRepository } from "../../repositories/prisma/prisma-product-characteristic-repository";
import { DisableProductCharacteristicUseCase } from "../../useCases/product-characteristics/disable-product-characteristic-usecase";

export async function disable(request: Request, response: Response) {

    try {
        const id = request.params.id

        const prismaProductCharacteristicRepository = new PrismaProductCharacteristicRepository()
        const listCharacteristicByProductUseCase = new DisableProductCharacteristicUseCase(prismaProductCharacteristicRepository)

        const { productCharacteristic } = await listCharacteristicByProductUseCase.execute({
            id
        })

        response.status(200).send(productCharacteristic)
    } catch (error) {
        console.log(error)
    }
}
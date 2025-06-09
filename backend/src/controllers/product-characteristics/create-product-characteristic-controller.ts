import { Request, Response } from "express";
import { PrismaProductCharacteristicRepository } from "../../repositories/prisma/prisma-product-characteristic-repository";
import { CreateProductCharacteristicUseCase } from "../../useCases/product-characteristics/create-product-characteristic-usecase";

export async function create(request: Request, response: Response) {

    try {
        const data = request.body

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
import { Request, Response } from "express";
import { PrismaCharacteristicRepository } from "../../repositories/prisma/prisma-characteristic-repository";
import { ListCharacteristicUseCase } from "../../useCases/characteristics/list-characteristic-usecase";

export async function listAll(request: Request, response: Response) {
  
    try {

        const prismaCharacteristicRepository = new PrismaCharacteristicRepository()
        const listAllCharacteristicUseCase = new ListCharacteristicUseCase(prismaCharacteristicRepository)

        const { listAllCharacteristic } = await listAllCharacteristicUseCase.execute()

        response.status(200).send(listAllCharacteristic)
    } catch (error) {
        console.log(error)
    }
}
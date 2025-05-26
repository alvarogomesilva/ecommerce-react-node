import { Request, Response } from "express";
import { PrismaStoreRepository } from "../../repositories/prisma/prisma-store-repository";
import { UpdateStoreUseCase } from "../../useCases/store/update-store-usecase";
import { z } from "zod";


export async function update(request: Request, response: Response) {

    try {
        const { id, data } = request.body
        const prismaStoreRepository = new PrismaStoreRepository()
        const updateStoreUseCase = new UpdateStoreUseCase(prismaStoreRepository)

        const { store } = await updateStoreUseCase.execute({
            id,
            data
        })

        response.status(200).send(store)
    } catch (error) {
        console.log(error)
    }
}
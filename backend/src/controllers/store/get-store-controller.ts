import { Request, Response } from "express";
import { PrismaStoreRepository } from "../../repositories/prisma/prisma-store-repository";
import { GetStoreUseCase } from "../../useCases/store/get-store-usecase";


export async function getStore(request: Request, response: Response) {

    try {
        const id = request.params.id
        const prismaStoreRepository = new PrismaStoreRepository()
        const getStoreUseCase = new GetStoreUseCase(prismaStoreRepository)

        const { store } = await getStoreUseCase.execute({
            id,
        })

        response.status(200).send(store)
    } catch (error) {
        console.log(error)
    }
}
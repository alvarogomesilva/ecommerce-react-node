import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { ProfileUserUseCase } from "../../useCases/users/profile-user-usecase";
import { PrismaStoreRepository } from "../../repositories/prisma/prisma-store-repository";

export async function profile(request: Request, response: Response) {

    const userId = request.userId

    try {
        const prismaUserRepository = new PrismaUserRepository()
        const prismaStoreRepository = new PrismaStoreRepository()
        const profileUserUseCase = new ProfileUserUseCase(prismaUserRepository, prismaStoreRepository)

        const { user, store } = await profileUserUseCase.execute({
            userId
        })

        response.status(200).send({ user, store })
    } catch (error) {
        console.log(error)
    }
}
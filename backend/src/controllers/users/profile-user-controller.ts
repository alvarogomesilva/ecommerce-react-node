import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { ProfileUserUseCase } from "../../useCases/users/profile-user-usecase";

export async function profile(request: Request, response: Response) {

    const userId = request.userId

    try {
        const prismaUserRepository = new PrismaUserRepository()
        const profileUserUseCase = new ProfileUserUseCase(prismaUserRepository)

        const { user } = await profileUserUseCase.execute({
            userId
        })

        response.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
}
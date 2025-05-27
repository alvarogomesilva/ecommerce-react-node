import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { UpdateUserUseCase } from "../../useCases/users/update-user-usecase";

export async function update(request: Request, response: Response) {

    const userId = request.userId
    const data = request.body

    try {
        const prismaUserRepository = new PrismaUserRepository()
        const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository)

        const { user } = await updateUserUseCase.execute({
            userId,
            data
        })

        response.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
}
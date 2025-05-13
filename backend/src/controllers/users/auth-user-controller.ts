import { Request, Response } from "express";
import { z } from "zod";
import { AuthUserUseCase } from "../../useCases/users/auth-user-useCase";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { InvalidCredentialsErrors } from "../../errors/invalid-credentials-errors";

export async function autenticate(request: Request, response: Response) {

    const authenticateBodySchema = z.object({

        email: z.string().email(),
        password: z.string().min(6)
    })

    const { email, password } = authenticateBodySchema.parse(request.body)

    try {
        const prismaUserRepository = new PrismaUserRepository()
        const authenticateUseCase = new AuthUserUseCase(prismaUserRepository)

        await authenticateUseCase.execute({
            email,
            password
        })

    } catch (error) {

        if (error instanceof InvalidCredentialsErrors) {

            response.status(400).send({ message: error.message })
        }

    }


    response.status(200).send()
}
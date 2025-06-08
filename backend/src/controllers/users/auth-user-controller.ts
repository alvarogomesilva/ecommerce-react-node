import { Request, Response } from "express";
import { z } from "zod";
import { AuthUserUseCase } from "../../useCases/users/auth-user-useCase";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { InvalidCredentialsErrors } from "../../errors/invalid-credentials-errors";
import { sign } from "jsonwebtoken";
import { PrismaStoreRepository } from "../../repositories/prisma/prisma-store-repository";

export async function autenticate(request: Request, response: Response) {

    const authenticateBodySchema = z.object({

        email: z.string().email(),
        password: z.string().min(6)
    })

    const { email, password } = authenticateBodySchema.parse(request.body)

    try {
        const prismaUserRepository = new PrismaUserRepository()
        const prismaStoreRepository = new PrismaStoreRepository()

        const authenticateUseCase = new AuthUserUseCase(prismaUserRepository, prismaStoreRepository)

        const { user, store } = await authenticateUseCase.execute({
            email,
            password
        })

        const token = sign(
            {},
            process.env.JWT_SECRET as string,
            {
                subject: user.id,
                expiresIn: '1d'
            })

        if (!store) {
            response.status(200).send({
                token,
                user
            })
            return
        }

        response.status(200).send({
            token,
            user,
            store
        })

    } catch (error) {

        if (error instanceof InvalidCredentialsErrors) {

            response.status(400).send({ message: error.message })
        }

    }



}
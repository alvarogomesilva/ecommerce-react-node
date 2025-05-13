
import { Request, Response } from "express";
import { z } from "zod"
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { CreateUserUseCase } from "../../useCases/users/create-user-usecase";
import { UserAlredyExistsError } from "../../errors/user-alredy-exists-error";

export async function create(request: Request, response: Response) {

    const createBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = createBodySchema.parse(request.body)

    try {
        const prismaUserRepository = new PrismaUserRepository()
        const createUserUseCase = new CreateUserUseCase(prismaUserRepository)

        await createUserUseCase.execute({
            name,
            email,
            password
        })
        
    } catch (error) {
        if (error instanceof UserAlredyExistsError) {
            response.status(409).send({ message: error.message })
        }
    }

    response.status(201).send()
}
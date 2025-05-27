
import { prisma } from "../../lib/prisma";
import { CreateUserDto, User } from "../../types/user";
import { UserRepository } from "../user-repository";



export class PrismaUserRepository implements UserRepository {
   async create(data: CreateUserDto) {
        return await prisma.user.create({
            data
        })
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        return user
    }

    async findById(id: string) {
        const user =  await prisma.user.findUnique({
            where: { id }
        })

        return user
    }

    async update(id: string, data: any) {
        return await prisma.user.update({
            where: { id },
            data
        })
    }

}
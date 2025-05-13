import { CreateUserDto } from "@/types/user";
import { UserRepository } from "../user-repository";
import { prisma } from "@/lib/prisma";


export class PrismaUserRepository implements UserRepository {
   async create(data: CreateUserDto) {
        return await prisma.user.create({
            data
        })
    }
}
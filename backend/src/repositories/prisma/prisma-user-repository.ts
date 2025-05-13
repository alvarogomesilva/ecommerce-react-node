import { prisma } from "../../lib/prisma";
import { CreateUserDto, User } from "../../types/user";
import { UserRepository } from "../user-repository";

export class PrismaUserRepository implements UserRepository {
   async create(data: CreateUserDto) {
        return await prisma.user.create({
            data
        })
    }
}
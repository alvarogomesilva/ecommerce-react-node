import { prisma } from "../../lib/prisma";
import { StoreRepository } from "../store-repository";

export class PrismaStoreRepository implements StoreRepository {
    async findStoreByUserId(adminId: string) {
        const store = await prisma.store.findFirst({
            where: { adminId }
        })

        if (!store) {
            return null
        }

        return store
    }
}
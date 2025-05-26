import { prisma } from "../../lib/prisma";
import { Store } from "../../types/store";
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

    async updateStore(id: string, data: Store){
        return await prisma.store.update({
            data,

            where: {
                id
            }
        })

    }
}
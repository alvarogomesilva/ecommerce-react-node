import { prisma } from "../../lib/prisma";
import { Characteristic } from "../../types/characteristic";
import { CharacteristicRepository } from "../characteristic-repository";

export class PrismaCharacteristicRepository implements CharacteristicRepository{
 
    async create(name: string) {
        return await prisma.characteristic.create({
            data: {
                name
            }
        })
    }

    async listAll() {
        const characteristics = await prisma.characteristic.findMany() 

        if (characteristics.length > 0) {
            return characteristics
        } 

        return null
    }
}
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
}
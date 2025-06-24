import { prisma } from "../../lib/prisma";
import { CreateProductCharacteristicDto } from "../../types/product-characteristic";
import { ProductCharacteristicRepository } from "../product-characteristic-repository";

export class PrismaProductCharacteristicRepository implements ProductCharacteristicRepository {

    async create(data: CreateProductCharacteristicDto) {
        return await prisma.productCharacteristic.create({
            data
        })
    }

    async listCharacteristicByProduct(id: string) {
        const characteristics = await prisma.productCharacteristic.findMany({
            where: { productId: id },
            include: {
                characteristic: true
            }
        })

        // Agrupar por nome da characteristic
        const grouped = characteristics.reduce((acc, item) => {
            const name = item.characteristic.name as string

            if (!acc[name]) {
                acc[name] = []
            }

            acc[name].push({
                id: item.id,
                description: item.description,
                addition: item.addition,
                hex_value: item.hex_value
            })

            return acc
        }, {} as Record<string, {
            id: string
            description: string
            addition: number | null
            hex_value: string | null
        }[]>)


        return grouped
    }

}
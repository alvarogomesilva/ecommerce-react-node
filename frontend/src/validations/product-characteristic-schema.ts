import { z } from "zod";

export const productCharacteristicSchema = z.object({
    productId: z.string(),
    characteristicId: z.string(),
    description: z.string(),
    addition: z.string(),
    hex_value: z.string()
})

export type ProductCharacteristicInput = z.infer<typeof productCharacteristicSchema>
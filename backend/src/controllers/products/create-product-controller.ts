import { z } from "zod";
import { Request, Response } from "express";
import { PrismaProductRepository } from "../../repositories/prisma/prisma-product-repository";
import { CreateProductUseCase } from "../../useCases/products/create-product-usecase";
import sharp from "sharp";
import { unlink } from "node:fs/promises";

export async function create(request: Request, response: Response) {
    const createProductBodySchema = z.object({
        name: z.string(),
        price: z.coerce.number().int().positive(),
        description: z.string().optional(),
        categoryId: z.string().uuid(),
        link: z.string().url().optional(),
        subCategoryId: z.string().uuid().optional(),
        control_stock: z.coerce.boolean(),
        active: z.coerce.boolean(),
    })

    try {

        let image: string | null = null;

        if (request.file) {
            const extension = request.file.mimetype.substring(6)
            let randomName = Math.floor(Math.random() * 999999999) + Date.now()
            await sharp(request.file.path)
                .resize(500)
                .toFile(`./uploads/products/${randomName}.${extension}`)

            image = `${randomName}.${extension}`
            await unlink(request.file.path)
        }

        const data = createProductBodySchema.parse(request.body)

        const prismaProductRepository = new PrismaProductRepository()
        const createProductoUseCase = new CreateProductUseCase(prismaProductRepository)

        const { product } = await createProductoUseCase.execute({
            data,
            image
        })

        response.status(201).send(product)
    } catch (error) {
        console.log(error)
    }
}
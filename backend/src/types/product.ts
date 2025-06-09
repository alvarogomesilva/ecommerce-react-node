export type Product = {
    id?: string
    name: string
    price: number
    description: string | null
    control_stock: boolean
    active: boolean
    link: string | null
    categoryId: string | null
    subCategoryId: string | null
    createdAt: Date
    updatedAt: Date
}

export interface CreateProductDto {
    name: string
    price: number
    description?: string
    categoryId: string
    subCategoryId?: string
    link?: string
    control_stock: boolean
    active: boolean
}
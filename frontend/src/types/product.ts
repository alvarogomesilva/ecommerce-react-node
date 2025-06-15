
export interface Product {
    id?: string
    name: string
    price: string
    description: string | null
    control_stock: boolean
    active: boolean
    link: string | null
    categoryId: string | null
    subCategoryId: string | null
    createdAt: Date
    updatedAt: Date
}
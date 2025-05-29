
export type SubCategory = {
    id: string
    name: string
    categoryId: string
    createdAt: Date
    updatedAt: Date
}

export interface CreateSubCategoryDto {
    name: string
    categoryId: string
}
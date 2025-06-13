import { api } from "../../lib/axios"
import type { CategoryInput } from "../../validations/categorySchema"


export async function createCategory({ name }: CategoryInput) {
    await api.post('/categories', { name })
}
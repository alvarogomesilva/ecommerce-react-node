import { api } from "../lib/axios"

export interface SignupBody {
    name: string
    email: string
    password: string
}

export async function signUp({
    name,
    email,
    password
}: SignupBody) {
    await api.post('/users', {
        name,
        email,
        password
    })
}
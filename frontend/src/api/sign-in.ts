import { api } from "../lib/axios"

interface SignInBody {
    email: string
    password: string
}

export async function signIn({
    email,
    password
}: SignInBody) {
    const data = await api.post('/session', {
        email,
        password
    })
    return data
}
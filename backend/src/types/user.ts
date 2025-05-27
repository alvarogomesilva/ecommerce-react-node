export type CreateUserDto = {
    name: string
    email: string
    password: string
}

export type User = {
    id: string
    name: string
    email: string
    role: string
    createdAt: Date
    updatedAt: Date
}

export type UserWithPassword = {
    password: string
} & User

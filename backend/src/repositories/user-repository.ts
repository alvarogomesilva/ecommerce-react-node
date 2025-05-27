import { CreateUserDto, User, UserWithPassword } from "../types/user";


export abstract class UserRepository {
    abstract create(data: CreateUserDto): Promise<User>
    abstract findByEmail(email: string): Promise<UserWithPassword | null>
    abstract findById(id: string): Promise<UserWithPassword | null>
    abstract update(id: string, data: any): Promise<User>
}
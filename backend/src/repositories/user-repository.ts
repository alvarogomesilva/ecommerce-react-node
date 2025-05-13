import { CreateUserDto, User, UserWithPassword } from "../types/user";


export abstract class UserRepository {
    abstract create(data: CreateUserDto): Promise<User>
    abstract findByEmail(email: string): Promise<UserWithPassword | null>
}
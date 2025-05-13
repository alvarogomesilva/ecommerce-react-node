import { CreateUserDto, User } from "../types/user";


export abstract class UserRepository {
    abstract create(data: CreateUserDto): Promise<User>
}

import { hash } from "bcryptjs"
import { User } from "../../types/user"
import { UserRepository } from "../../repositories/user-repository"


interface CreateUserUseCaseRequest {
    name: string
    email: string
    password: string
}

interface CreateUserUseCaseReponse {
    user: User
}


export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute({ name, email, password }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseReponse> {

        const password_hash = await hash(password, 6)

        const user = await this.userRepository.create({
            name,
            email,
            password: password_hash
        })

        return {
            user,
        }
    }
}
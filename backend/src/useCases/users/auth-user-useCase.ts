import { compare } from "bcryptjs";
import { InvalidCredentialsErrors } from "../../errors/invalid-credentials-errors";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../types/user";


interface AuthUserUseCaseRequest {
    email: string
    password: string
}

interface AuthUserUseCaseReponse {
    user: User
}


export class AuthUserUseCase {
    constructor (private userRepository: UserRepository) {} 

    async execute({email, password}: AuthUserUseCaseRequest): Promise<AuthUserUseCaseReponse> {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new InvalidCredentialsErrors()
        }

        const doesPasswordsMatches = await compare(password, user.password)

        if (!doesPasswordsMatches) {
            throw new InvalidCredentialsErrors()
        }

        return {
            user
        }

    }
}
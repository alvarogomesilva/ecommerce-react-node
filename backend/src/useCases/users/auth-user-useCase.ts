import { compare } from "bcryptjs";
import { InvalidCredentialsErrors } from "../../errors/invalid-credentials-errors";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../types/user";
import { Store } from "../../types/store";
import { StoreRepository } from "../../repositories/store-repository";


interface AuthUserUseCaseRequest {
    email: string
    password: string
}

interface AuthUserUseCaseReponse {
    user: User,
    store: Store | null
}


export class AuthUserUseCase {
    constructor (
        private userRepository: UserRepository,
        private storeRepository: StoreRepository
    ) {} 

    async execute({email, password}: AuthUserUseCaseRequest): Promise<AuthUserUseCaseReponse> {
        const user = await this.userRepository.findByEmail(email)
        if (!user) {
            throw new InvalidCredentialsErrors()
        }

        const store = await this.storeRepository.findStoreByUserId(user?.id)

        const doesPasswordsMatches = await compare(password, user.password)

        if (!doesPasswordsMatches) {
            throw new InvalidCredentialsErrors()
        }

        return {
            user,
            store
        }

    }
}
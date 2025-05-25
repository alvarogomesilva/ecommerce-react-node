import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import { StoreRepository } from "../../repositories/store-repository";
import { UserRepository } from "../../repositories/user-repository";
import { Store } from "../../types/store";
import { User } from "../../types/user";

interface ProfileUserUseCaseRequest {
    userId: string
}

interface ProfileUserUseCaseResponse {
    user: User,
    store: Store | null
}


export class ProfileUserUseCase {
    constructor(
        private userRepository: UserRepository,
        private storeRepository: StoreRepository
    ) { }

    async execute({ userId }: ProfileUserUseCaseRequest): Promise<ProfileUserUseCaseResponse> {

        const user = await this.userRepository.findById(userId)

        if (!user) {
            throw new ResourceNotFoundError()
        }

        const store = await this.storeRepository.findStoreByUserId(user.id)


        return {
            user,
            store
        }
    }
}
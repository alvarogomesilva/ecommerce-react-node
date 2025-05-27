import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import { StoreRepository } from "../../repositories/store-repository";
import { UserRepository } from "../../repositories/user-repository";
import { Store } from "../../types/store";
import { User } from "../../types/user";

interface UpdateUserUseCaseRequest {
    userId: string
    data: User
}

interface UpdateUserUseCaseResponse {
    user: User
}


export class UpdateUserUseCase {
    constructor(
        private userRepository: UserRepository,
    ) { }

    async execute({ userId, data }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {

        const user = await this.userRepository.update(userId, data)

        return {
            user
        }
    }
}
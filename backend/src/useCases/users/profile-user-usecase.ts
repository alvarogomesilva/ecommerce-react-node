import { ResourceNotFoundError } from "../../errors/resource-not-found-error";
import { UserRepository } from "../../repositories/user-repository";
import { User } from "../../types/user";

interface ProfileUserUseCaseRequest {
    userId: string
}

interface ProfileUserUseCaseResponse {
    user: User
}


export class ProfileUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute({ userId }: ProfileUserUseCaseRequest): Promise<ProfileUserUseCaseResponse> {

        const user = await this.userRepository.findById(userId)

        if (!user ) {
            throw new ResourceNotFoundError()
        }

        return {
            user
        }
    }
}
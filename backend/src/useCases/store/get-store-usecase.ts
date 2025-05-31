import { ResourceNotFoundError } from "../../errors/resource-not-found-error"
import { StoreRepository } from "../../repositories/store-repository"
import { Store } from "../../types/store"

interface GetStoreUseCaseRequest {
    id: string
}

interface GetStoreUseCaseReponse {
    store: Store
}

export class GetStoreUseCase {
    constructor(private storeRepository: StoreRepository) {}

    async execute({ id }: GetStoreUseCaseRequest): Promise<GetStoreUseCaseReponse> {
        const store = await this.storeRepository.getStore(id)

        if (!store) {
            throw new ResourceNotFoundError()
        }

        return {
            store
        }
    }
}
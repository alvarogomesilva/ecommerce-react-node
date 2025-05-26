import { StoreRepository } from "../../repositories/store-repository"
import { Store } from "../../types/store"

interface UpdateStoreUseCaseRequest {
    id: string
    data: Store
}

interface UpdateStoreUseCaseReponse {
    store: Store
}

export class UpdateStoreUseCase {
    constructor(private storeRepository: StoreRepository) {}

    async execute({ id, data }: UpdateStoreUseCaseRequest): Promise<UpdateStoreUseCaseReponse> {
        const store = await this.storeRepository.updateStore(id, data)

        return {
            store
        }
    }
}
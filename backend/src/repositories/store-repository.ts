import { Store } from "../types/store";

export abstract class StoreRepository {
    abstract findStoreByUserId(adminId: string): Promise<Store | null>
    abstract updateStore(id: string, data: Store): Promise<Store>
}
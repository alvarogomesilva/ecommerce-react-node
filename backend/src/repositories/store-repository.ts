import { Store } from "../types/store";

export abstract class StoreRepository {
    abstract findStoreByUserId(adminId: string): Promise<Store | null>
}
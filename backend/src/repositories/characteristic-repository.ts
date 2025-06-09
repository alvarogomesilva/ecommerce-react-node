import { Characteristic } from "../types/characteristic";

export abstract class CharacteristicRepository {
    abstract create(name: string): Promise<Characteristic>
    abstract listAll(): Promise<Characteristic[] | null>
} 
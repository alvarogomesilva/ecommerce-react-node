import { CharacteristicRepository } from "../../repositories/characteristic-repository";
import { Characteristic } from "../../types/characteristic";


interface CreateCharacteristicUseCaseRequest {
    name: string
}

interface CreateCharacteristicUseCaseResponse {
    characteristic: Characteristic
}

export class CreateCharacteristicUseCase {
    constructor (private characteristicRepository: CharacteristicRepository) {}

    async execute({ name }: CreateCharacteristicUseCaseRequest): Promise<CreateCharacteristicUseCaseResponse> {
        
        const characteristic = await this.characteristicRepository.create(name)

        return {
            characteristic
        }

    }
}
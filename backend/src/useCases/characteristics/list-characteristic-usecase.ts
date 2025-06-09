import { CharacteristicRepository } from "../../repositories/characteristic-repository"
import { Characteristic } from "../../types/characteristic"



interface ListProductsUseCaseResponse {
    listAllCharacteristic: Characteristic[] | null
}

export class ListCharacteristicUseCase {
    constructor(private characteristicRepository: CharacteristicRepository) {}

    async execute(): Promise<ListProductsUseCaseResponse> {
        const listAllCharacteristic = await this.characteristicRepository.listAll()

    
        return {
            listAllCharacteristic
        }
    }
}
import { useEffect, useState } from "react"
import { getAllCharacteristics } from "../api/characteristics/list-all-characteristic"
import type { GetAllCharacteristics } from "../api/characteristics/list-all-characteristic"

export const useCharacteristics = () => {
    const [characteristics, setCharacteristics] = useState<GetAllCharacteristics[] | null>(null)

    useEffect(() => {
        async function loadCharacteristics() {
            const response = await getAllCharacteristics()
            setCharacteristics(response)
        }

        loadCharacteristics()

    }, [])

    return { characteristics }
}

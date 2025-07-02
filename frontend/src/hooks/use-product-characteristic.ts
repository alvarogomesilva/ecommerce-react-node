import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createProductCharacteristic } from "../api/products-characteristics/create-products-characteristics"
import type { ProductCharacteristicInput } from "../validations/product-characteristic-schema";
import { toast } from "sonner";
import { useRef } from "react";
import { listAllCharacteristics } from "../api/products-characteristics/list-all-products-characteristics";
import { toggleActive } from "../api/products-characteristics/toggle-products-characteristics";
import { listAllActiveCharacteristics } from "../api/products-characteristics/list-all-active-products-characteristics";

export const useProductCharacteristics = (searchTerm: string) => {
    // const queryClient = useQueryClient()
    const createModalRef = useRef<HTMLButtonElement | any>(null)

    // Query para listar características
    const { data: productsCharacteristics } = useQuery({
        queryKey: ['products-characteristics', searchTerm!],
        queryFn: () => listAllCharacteristics(searchTerm),
        enabled: !!searchTerm
    })

    const { data: productsCharacteristicsActive } = useQuery({
        queryKey: ['products-characteristics-active', searchTerm!],
        queryFn: () => listAllActiveCharacteristics(searchTerm),
        enabled: !!searchTerm
    })


    const toggleActiveMutation = useMutation({
        mutationFn: toggleActive
    })

    const toggleProductCharacteristic = async (id: string) => {
        toggleActiveMutation.mutate(id)

        toast.message('Característica', {
            description: "Característica atualizada com sucesso!"
        })
    }

    const createMutation = useMutation({
        mutationFn: createProductCharacteristic
    })

    const onSubmit = async (data: ProductCharacteristicInput) => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        createMutation.mutate(data);

        createModalRef.current?.click()


        toast.message('Cadastro de Categoria', {
            description: "Categoria Cadastrada com sucesso"
        })
    };




    return {
        createModalRef,
        onSubmit,
        productsCharacteristics,
        productsCharacteristicsActive,
        toggleProductCharacteristic
    }
} 
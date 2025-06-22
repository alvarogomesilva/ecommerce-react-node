import { useMutation } from "@tanstack/react-query"
import { createProductCharacteristic } from "../api/products-characteristics/create-products-characteristics"
import type { ProductCharacteristicInput } from "../validations/product-characteristic-schema";
import { toast } from "sonner";
import { useRef } from "react";

export const useProductCharacteristics = () => {
    const createModalRef = useRef<HTMLButtonElement | any>(null)

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
        onSubmit
    }
} 
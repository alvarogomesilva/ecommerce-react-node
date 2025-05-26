import { z } from "zod"
import { useAuthStore } from "../../store/use-auth-store"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { updateStore } from "../../api/update-store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { toast } from "sonner"

const updateStoreSchema = z.object({
    id: z.string(),
    name: z.string().min(1, "Nome é obrigatório!"),
    title: z.string().min(1, "Titulo é obrigatório!"),
    address: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
    email: z.string(),
    color: z.string()
})

type UpdateStoreForm = z.infer<typeof updateStoreSchema>

export function Settings() {
    const { store, setStore } = useAuthStore()

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm<UpdateStoreForm>({
        resolver: zodResolver(updateStoreSchema),
        defaultValues: {
            id: "",
            name: "",
            title: "",
            address: "",
            phone: "",
            whatsapp: "",
            email: "",
            color: "" 
        }
    })

    // Atualiza os valores padrão quando a store estiver disponível
    useEffect(() => {
        if (store) {
            reset({
                id: store.id,
                name: store.name || "",
                title: store.title || "",
                address: store?.address || "",
                phone: store?.phone || "",
                email: store?.email || "",
                whatsapp: store?.whatsapp || "",
                color: store?.color || ""
            })
        }
    }, [store, reset])

    const { mutateAsync: updateStoreFn } = useMutation({
        mutationFn: updateStore
    })

    async function handleUpdateStore(data: UpdateStoreForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            const response = await updateStoreFn({
                id: data.id,
                data: data
            })

            setStore(response)
            toast.message('Loja Atualiza', {
                description: 'Loja atualizada com sucesso',
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="container">
            <div className="col-lg-12">
                <h4 className="my-3">Minha Loja</h4>
                <form className="needs-validation my-5" onSubmit={handleSubmit(handleUpdateStore)}>
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Nome da Loja</label>
                            <input

                                type="text"
                                className="form-control"
                                id="firstName"
                                {...register("name")}
                            />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Telefone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                {...register("phone")}

                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>


                        <div className="col-6">
                            <label htmlFor="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("email")}
                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="email" className="form-label">Whatsapp Loja</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("whatsapp")}
                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="address" className="form-label">Endereço</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("address")}
                            />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="address" className="form-label">Cor</label>
                            <select 
                                className="form-select form-control"
                                {...register("color")}
                                >
                                <option value={"primary"}>Azul</option>
                                <option value={"secondary"}>Cinza</option>
                                <option value={"success"}>Verde</option>
                                <option value={"danger"}>Vermelho</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Texto Destaque Cabeçalho</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                {...register("title")}

                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Logo</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                        </div>

                    </div>
                    <button
                        className={`w-100 btn btn-${store?.color} btn-lg`}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Atualizando...' : 'Atualizar'}
                    </button>

                </form>
            </div>
        </main>
    )
}
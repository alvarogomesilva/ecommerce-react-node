import { useForm } from "react-hook-form"
import { useCharacteristics } from "../hooks/use-characteristics"
import type { ProductCharacteristicInput } from "../validations/product-characteristic-schema"
import { useProductCharacteristics } from "../hooks/use-product-characteristic"


interface ModalProps {
    productId: string
}

export function ModalProductCharacteristic({ productId }: ModalProps) {
    const { characteristics } = useCharacteristics()
    const { createModalRef, onSubmit, productsCharacteristics } = useProductCharacteristics(productId)
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<ProductCharacteristicInput>({
        defaultValues: {
            characteristicId: "",
            description: "",
            addition: "",
            hex_value: ""
        }
    })

    const handleRegisterProductCharacteristic = async (data: ProductCharacteristicInput) => {

        await onSubmit({
            productId: productId,
            addition: data.addition,
            characteristicId: data.characteristicId,
            description: data.description,
            hex_value: data.hex_value
        })
    }

    return (
        <div className="modal fade" id="characteristicModal" tabIndex={-1} ref={createModalRef}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(handleRegisterProductCharacteristic)}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Adicionar Característica</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="col-form-label">Característica</label>
                                        <select
                                            className="form-select form-select-sm" aria-label=".form-select-sm example"
                                            {...register("characteristicId")}
                                        >
                                            <option value="">Selecione uma caracteristica</option>
                                            {characteristics?.map((characteristic) => (
                                                <option key={characteristic.id} value={characteristic.id}>{characteristic.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Descrição</label>
                                        <input
                                            type="text" className="form-control form-control-sm"
                                            {...register("description")}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Valor<span className="text-muted"> (Se tiver acréscimo)</span></label>
                                        <input type="text" className="form-control form-control-sm"
                                            {...register("addition")}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Código<span className="text-muted"> (Hexadecimal da cor)</span></label>
                                        <input type="text" className="form-control form-control-sm"
                                            {...register("hex_value")}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="col-form-label">Características do produto</label>
                                        {Object.entries(productsCharacteristics ?? {}).map(([name, items]) => (
                                            <div key={name}>
                                                <h6>{name}</h6>
                                                <ul>
                                                    {items.map(item => (
                                                        <li key={item.id}>{item.description}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"

                            >
                                Fechar
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{ width: "120px" }}
                            >
                                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
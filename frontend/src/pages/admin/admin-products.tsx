import { useRef, useState } from "react";
import { useAuthStore } from "../../store/use-auth-store"
import Image from '../../assets/camera.svg'
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { createProduct, } from "../../api/products/create-product";
import { toast } from "sonner";
import { useCategories } from "../../hooks/use-categories";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../api/products/get-all-products";
import { queryClient } from "../../lib/react-query";
import { parsePriceToInt } from "../../utils/parsePriceToInt";

const createProductschemaBody = z.object({
    active: z.boolean(),
    control_stock: z.boolean(),
    name: z.string(),
    price: z.string(),
    categoryId: z.string()

})

type CreateProductschemaBody = z.infer<typeof createProductschemaBody>

export function AdminProducts() {
    const modalRef = useRef<HTMLButtonElement>(null)
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | undefined>()
    const { store } = useAuthStore()
    const { categories } = useCategories()

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }

        setFile(file)
    };

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm({
        defaultValues: {
            active: true,
            control_stock: false,
            name: "",
            price: "",
            categoryId: ""
        }
    })

    const { mutateAsync: createProductFn } = useMutation({
        mutationFn: createProduct,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })

    async function handleCreateProduct(data: CreateProductschemaBody) {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("price", String(parsePriceToInt(data.price)))
        formData.append("control_stock", String(data.control_stock))
        formData.append("active", String(data.active))
        formData.append("categoryId", data.categoryId)

        if (file) {
            formData.append("image", file)
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            // formData.forEach((value, key) => {
            //     console.log(`${key}:`, value)
            // })
            await createProductFn(formData)
            modalRef.current?.click()

            toast.message("Cadstro de produto", {
                description: "Produto cadastrado com sucesso"
            })
            reset()
        } catch (error) {
            console.error(error)
        }
    }


    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })

    return (
        <main className="container">
            <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel3"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleCreateProduct)}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel3">
                                    Novo Produto
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    ref={modalRef}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="container my-5">
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="card p-4 shadow-sm rounded-4">
                                                        <h5 className="mb-3 fw-semibold">Selecionar Imagem</h5>
                                                        <label htmlFor="imageUpload" className="form-label">Escolha um arquivo de imagem</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="imageUpload"
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                        />
                                                        <small className="text-muted mt-2 d-block">
                                                            Formatos suportados: JPG, PNG, WEBP.
                                                        </small>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="card shadow-sm rounded-4 border">
                                                        <div className="card-body text-center">
                                                            <h6 className="card-title mb-3 text-muted">Imagem do produto</h6>
                                                            <img
                                                                src={preview || Image}
                                                                alt="Prévia"
                                                                className="img-fluid rounded border"
                                                                style={{ width: '100%', maxWidth: '300px', height: '300px', objectFit: 'fill' }}
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col d-flex align-items-center gap-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="produtoAtivo"
                                            {...register('active')}
                                        />
                                        <label
                                            className="form-check-label mb-0"
                                            htmlFor="produtoAtivo"
                                        >
                                            Produto Ativo
                                        </label>
                                    </div>
                                    <div className="col d-flex align-items-center gap-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="controlaEstoque"
                                            {...register("control_stock")}
                                        />
                                        <label
                                            className="form-check-label mb-0"
                                            htmlFor="controlaEstoque"
                                        >
                                            Controla Estoque
                                        </label>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="nomeProduto" className="form-label">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nomeProduto"
                                            placeholder="Nome do produto"
                                            {...register("name", { required: true })}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="categoria" className="form-label">
                                            Categoria
                                        </label>
                                        <select
                                            className="form-select"
                                            id="categoria"
                                            defaultValue=""
                                            {...register("categoryId")}
                                        >
                                            <option value="" disabled>
                                                Escolha uma categoria
                                            </option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className="col">
                                        <label htmlFor="subcategoria" className="form-label">
                                            Sub Categoria
                                        </label>
                                        <select className="form-select" id="subcategoria">
                                            <option selected>Escolha uma subcategoria</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="preco" className="form-label">
                                            Preço
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="preco"
                                            placeholder="R$"
                                            {...register("price", { required: true })}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="estoque" className="form-label">
                                            Estoque
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="estoque"
                                            placeholder="Quantidade"
                                            disabled={true}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="email" className="form-label">Link<span className="text-muted"> (Se for produto digital)</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="estoque"
                                        />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <div className="col">
                                        <label
                                            htmlFor="descricaoCurta"
                                            className="form-label"
                                        >
                                            Descrição curta
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="descricaoCurta"
                                            rows={2}
                                        ></textarea>
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
                                >
                                    {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className={`btn btn-${store?.color} m-3`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                >
                    Novo Produto
                </button>
            </div>

            {!data && (
                <p className="text-center">Nenhuma producto cadastrado!</p>
            )}


            {data && (
                <table

                    className="table table-sm table-responsive align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Itens</th>
                            <th scope="col">Data cadastro</th>
                            <th scope="col" className="text-center">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    {data && data.map((product) => (
                        <tbody key={product.id}>
                            <tr >
                                <td>{product.name}</td>
                                <td>1</td>
                                <td>20/10/2024</td>
                                <td className="d-flex justify-content-center gap-2">
                                    <button type="button" className="btn btn-outline-success">
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary">
                                        <i className="fa-solid fa-palette"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-danger">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            )}


            {data && (
                <nav className="d-flex justify-content-end" aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </main>
    )
}

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { useRef, useState } from "react"
import { queryClient } from "../../lib/react-query"
import { useAuthStore } from "../../store/use-auth-store"
import { registerCategory } from "../../api/categories/register-category"
import { deleteCategory } from "../../api/categories/delete-category"
import { getCategories } from "../../api/categories/get-categories"

const registerCategorySchema = z.object({
    name: z.string().min(1, "Nome é obrigatório!")
})

type RegisterCategoryForm = z.infer<typeof registerCategorySchema>

export function AdminCategories() {
    const { store } = useAuthStore()
    const [categoryDelete, setCategoryDelete] = useState('')
    const closeBtnRef = useRef<HTMLButtonElement>(null)
    const closeBtnRef2 = useRef<HTMLButtonElement>(null)
    const {
        register,
        reset,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm<RegisterCategoryForm>({
        resolver: zodResolver(registerCategorySchema)
    })

    const { mutateAsync: registerCategoryFn } = useMutation({
        mutationFn: registerCategory,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['categories'] })
        }
    })

    const { mutateAsync: deleteCategoryFn } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['categories'] })
        }
    })

    async function handleRegisterCategory(data: RegisterCategoryForm) {
        try {

            await new Promise((resolve) => setTimeout(resolve, 1500))
            await registerCategoryFn({
                name: data.name
            })
            reset()
            closeBtnRef.current?.click()
            toast.message('Nova categoria', {
                description: 'Categoria cadastrada com sucesso',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })


    async function handleDeleteCategory(id: string) {
        try {

            await new Promise((resolve) => setTimeout(resolve, 1500))
            await deleteCategoryFn({
                id
            })

            toast.message('Categoria deletada', {
                description: 'Categoria deletada com sucesso!',
            })

            closeBtnRef2.current?.click()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <main className="container">
            {/* Modal */}

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleRegisterCategory)}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Nova categoria</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Nome</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && (
                                        <span className="text-danger">{errors.name.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    ref={closeBtnRef}
                                >
                                    Fechar
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}

                                >
                                    {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Confirmar exclusão</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Fechar"
                                ref={closeBtnRef2}
                                >
                                </button>
                        </div>
                        <div className="modal-body">
                            Tem certeza que deseja excluir esta categoria?
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-bs-dismiss="modal">Cancelar</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDeleteCategory(categoryDelete)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Botão para abrir o modal */}
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className={`btn btn-${store?.color} m-3`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Nova categoria
                </button>
            </div>

            {!data && (
                <p className="text-center">Nenhuma categoria cadastrada!</p>
            )}


            {data && data.map((category) => (
                <table
                    key={category.id}
                    className="table table-sm table-responsive align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Itens</th>
                            <th scope="col">Data cadastro</th>
                            <th scope="col" className="text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>1</td>
                            <td>20/10/2024</td>
                            <td className="d-flex justify-content-center gap-2">
                                <button type="button" className="btn btn-outline-success"><i className="fa-solid fa-eye"></i></button>
                                <button type="button" className="btn btn-outline-primary"><i className="fa-solid fa-pen-to-square"></i></button>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2"
                                    onClick={() => setCategoryDelete(category.id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            ))}

            {data && (
                <nav className="d-flex justify-content-end" aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
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

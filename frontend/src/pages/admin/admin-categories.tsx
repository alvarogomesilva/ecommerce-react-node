

import { useAuthStore } from "../../store/use-auth-store"

import { Table } from "../../components/categories/table"
import { useCategories } from "../../hooks/use-categories"

export function AdminCategories() {
    const { store } = useAuthStore()

    const { 
        form, 
        onSubmit, 
        createModalRef, 
        categories, 
     } = useCategories()
    const { register, handleSubmit, formState: { isSubmitting, errors } } = form

    return (
        <main className="container">
            {/* Modal */}
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className={`btn btn-${store?.color} m-3`}
                    data-bs-toggle="modal"
                    data-bs-target="#createCategory">
                    Nova categoria
                </button>
            </div>

            <div className="modal fade" id="createCategory" tabIndex={-1} aria-labelledby="createCategoryLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="createCategoryLabel">Nova categoria</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Nome</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        {...register("name")}
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
                                    ref={createModalRef}
                                >
                                    Fechar
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                    style={{ width: "120px" }}
                                >
                                    {isSubmitting ? (
                                        <div className="spinner-border text-light spinner-border-sm" role="status">
                                            <span className="visually-hidden">Carregando...</span>
                                        </div>
                                    ) : (
                                        "Cadastrar"
                                    )}
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>

                <Table 
                    categories={categories}
                />      
        </main>
    )
}

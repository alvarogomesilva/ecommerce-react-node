import { useAuthStore } from "../../store/use-auth-store"


export function AdminProducts() {
    const { store } = useAuthStore()

    return (
        <main className="container">
            {/* MODAL */}

            <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel3">Novo Produto</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Nome</label>
                                    <input
                                        type="text"
                                        className={`form-control`} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                // ref={closeBtnRef}
                                >
                                    Fechar
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                ///disabled={isSubmitting}

                                >
                                    {/* {isSubmitting ? 'Cadastrando...' : 'Cadastrar'} */}
                                    Cadastrar
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

            <table className="table table-sm table-responsive align-middle">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Itens</th>
                        <th scope="col">Data cadastro</th>
                        <th scope="col" className="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sabonetes</td>
                        <td>1</td>
                        <td>20/10/2024</td>
                        <td className="d-flex justify-content-center gap-2">
                            <button type="button" className="btn btn-outline-success"><i className="fa-solid fa-eye"></i></button>
                            <button type="button" className="btn btn-outline-primary"><i className="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>
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
        </main>
    )
}
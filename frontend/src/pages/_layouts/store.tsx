import { Outlet } from "react-router-dom";

export function StoreLayout() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
                <div className="container-xl">
                    <a className="navbar-brand" href="#">Loja</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categorias</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contatos</a>
                            </li>


                        </ul>
                        <div>
                            <button type="button" className="btn btn-primary mx-2">

                                <i className="fa-solid fa-user"></i>
                                <span className="mx-1">Login</span>

                            </button>
                            <button type="button" className="btn btn-primary">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="mx-1">Carrinho</span>
                                </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-xl mb-4">
                <Outlet />

            </div>
        </div>
    )
}
import { Outlet } from "react-router-dom";

export function StoreLayout() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4" aria-label="Ninth navbar example">
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
                            <button type="button" className="btn btn-info mx-2">

                                <i className="fa-solid fa-user text-secondary"></i>
                                <span className="mx-1 text-secondary">Login</span>

                            </button>
                            <button type="button" className="btn btn-info">
                                <i className="fa-solid fa-cart-shopping text-secondary"></i>
                                <span className="mx-1 text-secondary">Carrinho</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <div className="bg-primary">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">About</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">About</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">About</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-1 mb-3">
                                <form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of what's new and exciting from us.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2"> <label htmlFor="newsletter1" className="visually-hidden">Email address</label> <input id="newsletter1" type="email" className="form-control" placeholder="Email address" /> <button className="btn btn-info text-secondary" type="button">Subscribe</button> </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                            <p>© 2025 Company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="#" aria-label="Instagram">
                                        <svg className="bi" width="24" height="24">

                                        </svg>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="#" aria-label="Facebook">
                                        <svg className="bi" width="24" height="24" aria-hidden="true">

                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
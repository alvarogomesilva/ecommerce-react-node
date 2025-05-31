import { LogOut, Store } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/use-auth-store";
import { UserActive } from "../../components/user-active";

export function StoreLayout() {
    const { user, logout } = useAuthStore();
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary py-3" aria-label="Main navbar">
                <div className="container">

                    <Link
                        to="/"
                        className="navbar-brand d-flex flex-column flex-md-row align-items-center text-white"
                    >
                        <Store className="mb-1 mb-md-0 me-md-2" size={24} />
                        <h5 className="m-0 text-center text-md-start">Título da Loja</h5>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">

                        <ul className="navbar-nav mx-auto mb-3 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categorias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contatos</Link>
                            </li>
                        </ul>


                        <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
                            <UserActive logged={user} />

                            <Link className="text-white" to="/cart" title="Carrinho">
                                <i className="fa-solid fa-cart-shopping fs-5"></i>
                            </Link>

                            {user && (
                                <button
                                    className="btn btn-sm btn-outline-light d-flex align-items-center"
                                    onClick={logout}
                                    title="Sair"
                                >
                                    <LogOut className="me-1" size={16} />
                                    Sair
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>







            <main>
                <Outlet />
            </main>

            <footer className="bg-primary text-white mt-5">
                <div className="container py-5">
                    <div className="row">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    {["Home", "Features", "Pricing", "FAQs", "About"].map((item, idx) => (
                                        <li key={idx} className="nav-item mb-2">
                                            <Link to="#" className="nav-link p-0 text-white">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Assine nossa newsletter</h5>
                                <p>Resumo mensal do que há de novo e interessante.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email</label>
                                    <input id="newsletter1" type="email" className="form-control" placeholder="Digite seu e-mail" />
                                    <button className="btn btn-info text-white" type="button">Inscrever</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2025 Store, Inc. Todos os direitos reservados.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-light" href="#" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-light" href="#" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

import { LogOut, Store } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/use-auth-store";
import { UserActive } from "../../components/user-active";

export function StoreLayout() {
    const { user, logout } = useAuthStore();
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3" aria-label="Main navbar">
                <div className="container-xl">
                    <Link to="/" className="navbar-brand d-flex align-items-center text-white">
                        <Store className="me-2" />
                        <span>Store</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Início</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">Categorias</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Produtos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contatos</NavLink>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                            <UserActive logged={user} />
                            <Link to="/cart" className="nav-link text-white">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>

                            {user && (
                                <Link
                                    to={"/sign-in"}
                                    className="nav-link text-white"
                                    onClick={() => logout()}
                                >
                                    <LogOut />
                                </Link>
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

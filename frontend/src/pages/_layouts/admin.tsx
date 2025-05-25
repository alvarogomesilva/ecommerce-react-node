import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Store } from 'lucide-react';
import { useAuthStore } from "../../store/use-auth-store";

export function AdminLayout() {
    const { user, logout } = useAuthStore()
    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
                <div className="container">
                    <Link to="/admin/dashboard" className="navbar-brand d-flex align-items-center">
                        <Store className="me-2" />
                        <div className="d-flex flex-column lh-1">
                            <span>Store</span>
                            <span>Manager</span>
                        </div>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample07"
                        aria-controls="navbarsExample07"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <NavLink to="/admin/dashboard" className="nav-link" aria-current="page">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink to="/admin/painel" className="nav-link">
                                    Painel
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <button
                                    className="btn nav-link dropdown-toggle d-flex align-items-center p-0"
                                    id="userDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    type="button"
                                >
                                    <img
                                        src="https://github.com/mdo.png"
                                        alt="Foto do usuário"
                                        width="32"
                                        height="32"
                                        className="rounded-circle"
                                    />
                                    <span className="mx-1">{user?.name}</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    <li>
                                        <button 
                                        className="dropdown-item" 
                                        type="button" 
                                        onClick={() => {
                                            logout()
                                            navigate('/sign-in')
                                         }}>
                                            Sign out
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

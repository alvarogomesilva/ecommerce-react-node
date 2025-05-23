import { Link, Outlet } from "react-router-dom";
import { Store } from 'lucide-react';

export function AdminLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
                <div className="container">
                    <a className="navbar-brand d-flex justify-content-center align-items-center" href="#">
                        <Store className="me-2" />
                        <div className="d-flex flex-column lh-1">
                            <span>Store</span>
                            <span>Manager</span>
                        </div>
                    </a>

                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample07"
                        aria-controls="navbarsExample07"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <Link to={"/admin/dashboard"} className="nav-link active">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/admin/painel"} className="nav-link" >Painel</Link>
                            </li>
                         
                            
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>

    )
}
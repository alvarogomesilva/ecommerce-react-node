import { Outlet } from "react-router-dom";
import { LayoutDashboard, Shield  } from 'lucide-react';
export function AdminLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Eighth navbar example">
                <div className="container">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active d-flex gap-1" aria-current="page" href="#">
                                    <LayoutDashboard />
                                    Dashboard
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex gap-1" href="#">
                                    <Shield />
                                    Configurações
                                </a>
                            </li>

                            
                            
                        </ul>
                        <div className="dropdown">

                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />

                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>

    )
}
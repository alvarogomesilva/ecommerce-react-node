import { ShieldUser, User } from "lucide-react";
import { Link } from "react-router-dom";
import type { User as UserLogged } from "../store/use-auth-store";

interface UserActiveProps {
    logged: UserLogged | null;
}

export function UserActive({ logged }: UserActiveProps) {
    if (logged?.role === 'CUSTOMER') {
        return (
            <Link to="/profile" className="link text-white mx-2 d-flex flex-column align-items-center text-decoration-none">
                <User />
                <span className="fs-6">{logged?.name}</span>
            </Link>
        );
    }

    if (logged?.role === 'ADMIN') {
        return (
            <Link to="/admin/painel" className="link text-white mx-2 d-flex flex-column align-items-center text-decoration-none">
                <ShieldUser />
                <span className="fs-6">{logged?.name}</span>
            </Link>
        );
    }


    return (
        <Link to="/sign-in" className="btn btn-secondary mx-2">
            <i className="fa-solid fa-user text-white me-2"></i>
            <span>Login</span>
        </Link>
    );



}

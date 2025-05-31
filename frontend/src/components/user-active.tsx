import { ShieldUser, User } from "lucide-react";
import { Link } from "react-router-dom";
import type { User as UserLogged } from "../store/use-auth-store";

interface UserActiveProps {
  logged: UserLogged | null;
}

export function UserActive({ logged }: UserActiveProps) {
  if (logged?.role === "CUSTOMER") {
    return (
      <Link
        to="/profile"
        className="d-flex align-items-center gap-2 text-white text-decoration-none"
        title="Perfil do Cliente"
      >
        <User size={18} />
        <span className="d-none d-sm-inline">{logged.name}</span>
      </Link>
    );
  }

  if (logged?.role === "ADMIN") {
    return (
      <Link
        to="/admin/painel"
        className="d-flex align-items-center gap-2 text-white text-decoration-none"
        title="Painel Admin"
      >
        <ShieldUser size={18} />
        <span className="d-none d-sm-inline">{logged.name}</span>
      </Link>
    );
  }

  return (
    <Link
      to="/sign-in"
      className="btn btn-outline-light d-flex align-items-center gap-2"
      title="Entrar"
    >
      <i className="fa-solid fa-user"></i>
      <span className="d-none d-sm-inline">Login</span>
    </Link>
  );
}

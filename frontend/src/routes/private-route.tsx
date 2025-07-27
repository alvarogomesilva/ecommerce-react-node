import { useEffect, useState, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/use-auth-store";
import { api } from "../lib/axios";

interface Props {
  children: ReactNode;
  requiredRole?: 'ADMIN' | 'CUSTOMER';
}

export function PrivateRoute({ children, requiredRole }: Props) {
  const { setUser, logout } = useAuthStore();
  const [validating, setValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('@t');

      if (!token) {
      
        logout();
        setIsValid(false);
        setValidating(false);
        return;
      }

      try {
        const res = await api.get("/me");
        setUser(res.data.user, res.data.store);

        if (requiredRole && res.data.user.role !== requiredRole) {
          setIsValid(false);
        } else {
          setIsValid(true);
        }
      } catch {
        logout();
        setIsValid(false);
      } finally {
        setValidating(false);
      }
    };

    verifyToken();
  }, [location.pathname]);

  if (validating) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
        </div>
      </div>
    );
  }

  return isValid ? children : <Navigate to="/sign-in" replace />;
}

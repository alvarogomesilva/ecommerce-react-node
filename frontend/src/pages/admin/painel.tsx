import { Store } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/use-auth-store";

export function Painel() {
  const { store } = useAuthStore()
  return (
    <div className="container">
      {/* Título e ícone principal */}
      <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
        <Store
          className={`me-2 text-${store?.color}`}
          size={48} // Ícone maior que o padrão
        />
        <div className="d-flex flex-column lh-1">
          <span className="fw-bold fs-3">Store</span>
          <span className="fw-bolder">Manager</span>
        </div>
      </div>

      {/* Texto de boas-vindas */}
      <div className="text-center mb-4">
        <h3 className="text-bolder fs-3">Seja bem-vindo ao</h3>
        <h3 className="text-bolder fs-3">Sistema de Gerenciamento de Loja</h3>
      </div>

      <div className="text-center my-4">
        <p className="text-secondary">Selecione uma opção para prosseguir</p>
      </div>

      {/* Grid de cards */}
      <div className="row g-4">
        {[
          { to: "/admin/categories", icon: "fa-layer-group", title: "Categorias" },
          { to: "/admin/sub-categories", icon: "fa-table-list", title: "Sub Categorias" },
          { to: "/admin/characteristics", icon: "fa-solid fa-palette", title: "Caracteristicas" },
          { to: "/admin/products", icon: "fa-boxes-stacked", title: "Produtos" },
          { to: "/admin/banners", icon: "fa-images", title: "Banners" },
          { to: "/admin/banners", icon: "fa-cart-shopping", title: "Vendas" },
          { to: "/admin/banners", icon: "fa-users", title: "Clientes" },
          { to: "/admin/banners", icon: "fa-truck", title: "Movimentações" },
          { to: "/admin/banners", icon: "fa-comments", title: "Blog" },
        ].map((item, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <div className="card shadow-sm" style={{ width: "100%", maxWidth: "18rem" }}>
              <Link
                to={item.to}
                className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none"
              >
                <i
                  className={`fa-solid ${item.icon} text-${store?.color} ${
                    index === 2 ? "fs-2" : "fs-4"
                  }`} // Aumenta o ícone do card do meio (Produtos)
                ></i>
                <h5 className={`card-title text-center text-${store?.color}`}>{item.title}</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

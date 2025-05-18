import { Link } from "react-router-dom"

export function Dashboard() {
  return (
    <div className="container">
      <div className="row justify-content-between mt-4 gap-2">
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link
            to={"/admin/categories"}
            className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-layer-group fs-4"></i>
            <h5 className="card-title">Categorias</h5>

          </Link>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/sub-categories"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-table-list fs-4"></i>
            <h5 className="card-title">Sub Categorias</h5>

          </Link>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/products"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-boxes-stacked fs-4"></i>
            <h5 className="card-title">Produtos</h5>

          </Link>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/banners"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-images fs-4"></i>
            <h5 className="card-title">Banners</h5>

          </Link>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/banners"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-cart-shopping fs-4"></i>
            <h5 className="card-title">Vendas</h5>

          </Link>
        </div>

        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/banners"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-users fs-4"></i>
            <h5 className="card-title">Clientes</h5>

          </Link>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/banners"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-truck fs-4"></i>
            <h5 className="card-title">Movimentações</h5>

          </Link>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <Link to={"/admin/banners"} className="card-body d-flex flex-column justify-content-center align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-comments fs-4"></i>
            <h5 className="card-title">Blog</h5>

          </Link>
        </div>
      </div>
    </div>
  )
}
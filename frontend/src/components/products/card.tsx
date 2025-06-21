import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatMoney";
import type { Product } from "../../types/product";


interface CardProductProps {
  product: Product;
  id: string | undefined;
}

export function CardProduct({ product }: CardProductProps) {
    const path = 'http://localhost:3333/files/products'
    const fallbackImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"

    return (
        <div className="col">
            <div className="card h-100 d-flex flex-column justify-content-between">

                <img
                    className="card-img-top object-fit-cover"
                    style={{ height: "200px", objectFit: "cover" }}
                    src={product.image ? `${path}/${product.image}` : fallbackImage}
                    alt={product.name}
                />

                <div className="card-body p-3 text-center">
                    <h5 className="fw-bold mb-2">{product.name}</h5>
                    <p className="text-muted mb-0">{formatPrice(product.price)}</p>
                </div>

                <div className="card-footer bg-transparent border-0 pb-3">
                    <div className="d-flex justify-content-center gap-2">
                        <a className="btn btn-outline-dark" href="#" title="Adicionar ao carrinho">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark" title="Visualizar produto">
                            <i className="fa-solid fa-eye"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
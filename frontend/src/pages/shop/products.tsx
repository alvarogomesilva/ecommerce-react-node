import { useProducts } from "../../hooks/use-products"
import { formatPrice } from "../../utils/formatMoney"

export function Products() {
    const { products } = useProducts()
    const path = 'http://localhost:3333/files/products'
    const fallbackImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"

    return (
        <div className="container">
            <div className="row align-items-start my-4">
                {/* Menu lateral */}
                <div className="accordion col-12 col-md-2 mb-4 mb-md-0" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Produtos
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {["Produtos 1", "Produtos 2", "Produtos 3", "Produtos 4", "Produtos 5"].map((p, i) => (
                                    <p key={i}>
                                        <a href="#" className="text-decoration-none">{p}</a>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conteúdo principal */}
                <div className="col-12 col-md-10">
                    <div className="h-100 p-3 bg-body-tertiary border rounded-3">

                        {/* Pesquisa */}
                        <div className="d-flex align-items-center mb-4">
                            <input type="text" className="form-control" placeholder="Pesquisar produto" />
                            <button type="submit" className="btn btn-primary ms-2">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        {/* Lista de produtos */}
                        <div className="row gx-4 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {(products || []).map((product, index) => (
                                <div className="col" key={index}>
                                    <div className="card h-100 d-flex flex-column justify-content-between">
                                        
                                        {/* Imagem padronizada */}
                                        <img
                                            className="card-img-top object-fit-cover"
                                            style={{ height: "200px", objectFit: "cover" }}
                                            src={product.image ? `${path}/${product.image}` : fallbackImage}
                                            alt={product.name}
                                        />

                                        {/* Conteúdo */}
                                        <div className="card-body p-3 text-center">
                                            <h5 className="fw-bold mb-2">{product.name}</h5>
                                            <p className="text-muted mb-0">{formatPrice(product.price)}</p>
                                        </div>

                                        {/* Botões */}
                                        <div className="card-footer bg-transparent border-0 pb-3">
                                            <div className="d-flex justify-content-center gap-2">
                                                <a className="btn btn-outline-dark" href="#" title="Adicionar ao carrinho">
                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                </a>
                                                <a className="btn btn-outline-dark" href="#" title="Visualizar produto">
                                                    <i className="fa-solid fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

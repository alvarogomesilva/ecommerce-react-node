import { useProducts } from "../../hooks/use-products"
import { CardProduct } from "../../components/products/card"

export function Products() {
    const { products } = useProducts()


    return (
        <div className="container">
            <div className="row align-items-start my-4">
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

                <div className="col-12 col-md-10">
                    <div className="h-100 p-3 bg-body-tertiary border rounded-3">

                        <div className="d-flex align-items-center mb-4">
                            <input type="text" className="form-control" placeholder="Pesquisar produto" />
                            <button type="submit" className="btn btn-primary ms-2">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        <div className="row gx-4 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {(products || []).map((product) => (
                               <CardProduct
                                    key={product.id}
                                    id={product.id}
                                    product={product}
                                    
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

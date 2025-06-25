import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { listOneProduct } from "../../api/products/list-one-product"
import type { Product } from "../../types/product"
import { formatPrice } from "../../utils/formatMoney"
import { useProductCharacteristics } from "../../hooks/use-product-characteristic"

export function PageProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const { productsCharacteristics } = useProductCharacteristics(id!)
    const path = 'http://localhost:3333/files/products'

    useEffect(() => {
        async function listOne() {
            if (id) {
                const response = await listOneProduct({ id })
                if (response) setProduct(response)
            }
        }

        listOne()
    }, [id])

    return (
        <main className="container">
            <section className="">
                <div className="container px-4 px-lg-5 my-4">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            {/* <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div> */}
                            <img className="card-img-top mb-5 mb-md-0" src={`${path}/${product?.image}`} alt="..."
                                style={{ height: '500px' }}
                            /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h1 className="display-5 fw-bolder">{product?.name}</h1>
                            <div className="fs-5 mb-5">

                                <span>{formatPrice(String(product?.price))}</span>
                            </div>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" style={{ maxWidth: '3rem' }} />
                                <button className="btn btn-primary flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Adicionar ao carrinho 
                                </button>
                            </div>

                            <div className="row mt-3">
                                {productsCharacteristics && Object.entries(productsCharacteristics).map(([name, items]) => (
                                    <div key={name} className="col-md-4 mb-3">
                                        <label className="form-label">{name}</label>
                                        <select className="form-select">
                                            {items.map(item => (
                                                <option key={item.id} value={item.id}>
                                                    {item.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Produtos Relacionados</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{
                                    top: '0.5rem',
                                    right: '0.5rem'
                                }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{
                                    top: '0.5rem',
                                    right: '0.5rem'
                                }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popular Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

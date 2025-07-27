import { Link } from 'react-router-dom'
import Image from '../../assets/image.jpg'
import { useCartStore } from '../../store/use-cart-store'
import { formatPrice } from '../../utils/formatMoney';

export function Cart() {
    const { cart } = useCartStore();


    return (
        <main className="container my-3">
            <div className="row">
                <div className="col-lg-9">
                    <div className="card">
                        <div className="content-body p-4">
                            <h4 className="card-title mb-4">Carrinho</h4>

                            {/* Produto 1 */}
                            {cart.length > 0 && (
                                cart.map((product) => (
                                    <article className="row gy-3 mb-4 align-items-center" key={product.id}>
                                        <div className="col-md-5">
                                            <figure className="d-flex align-items-center">
                                                <div className="me-3">
                                                    <img src={Image} className="img-sm img-thumbnail" width={175} />
                                                </div>
                                                <figcaption>

                                                    <p className="text-muted mb-0">{product.name}</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-auto">
                                            <select className="form-select w-auto">
                                                <option value="">{product.quantity}</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2 col-sm-4 col-6">
                                            <div className="price-wrap lh-sm">
                                                <var className="price h6">{formatPrice(product.price * product.quantity)}</var><br />
                                                <small className="text-muted">{formatPrice(product.price)}</small>
                                            </div>
                                        </div>

                                    </article>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="col-lg-3">
                 
                    <div className="card">
                        <div className="card-body">
                            <dl className="dlist-align">
                                <dt>Total price:</dt>
                                <dd className="text-end"> $329.00</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Discount:</dt>
                                <dd className="text-end text-success"> - $60.00 </dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>TAX:</dt>
                                <dd className="text-end"> $14.00 </dd>
                            </dl>
                            <hr />
                            <dl className="dlist-align">
                                <dt>Total:</dt>
                                <dd className="text-end text-dark h5"> $357.90 </dd>
                            </dl>

                            <div className="d-grid gap-2 my-3">
                                <Link to={"/checkout"} className="btn btn-success w-100">Checkout</Link>
                                <Link to={"/products"} className="btn btn-light w-100">Voltar aos produtos</Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>

    )
}
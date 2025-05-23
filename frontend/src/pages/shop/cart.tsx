import { Link } from 'react-router-dom'
import Image from '../../assets/image.jpg'

export function Cart() {
    return (
        <main className="container my-3">
            <div className="row">
                <div className="col-lg-9">
                    <div className="card">
                        <div className="content-body p-4">
                            <h4 className="card-title mb-4">Carrinho</h4>

                            {/* Produto 1 */}
                            <article className="row gy-3 mb-4 align-items-center">
                                <div className="col-md-5">
                                    <figure className="d-flex align-items-center">
                                        <div className="me-3">
                                            <img src={Image} className="img-sm img-thumbnail" width={175} />
                                        </div>
                                        <figcaption>
                                            <a href="#" className="title">Winter jacket for men and lady</a>
                                            <p className="text-muted mb-0"> Yellow, Jeans </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-auto">
                                    <select className="form-select w-auto">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="col-md-2 col-sm-4 col-6">
                                    <div className="price-wrap lh-sm">
                                        <var className="price h6">R$1156.00</var><br />
                                        <small className="text-muted"> R$460.00 / por item </small>
                                    </div>
                                </div>

                            </article>

                            {/* Produto 2 */}
                            <article className="row gy-3 mb-4 align-items-center">
                                <div className="col-md-5">
                                    <figure className="d-flex align-items-center">
                                        <div className="me-3">
                                            <img src={Image} className="img-sm img-thumbnail" width={175} />
                                        </div>
                                        <figcaption>
                                            <a href="#" className="title">Mens T-shirt Cotton Base</a>
                                            <p className="text-muted mb-0"> Blue, Medium </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-auto">
                                    <select className="form-select w-auto">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option selected>4</option>
                                    </select>
                                </div>
                                <div className="col-md-2 col-sm-4 col-6">
                                    <div className="price-wrap lh-sm">
                                        <var className="price h6">R$44.80</var><br />
                                        <small className="text-muted"> R$12.20 / por item </small>
                                    </div>
                                </div>

                            </article>

                            {/* Produto 3 */}
                            <article className="row gy-3 mb-4 align-items-center">
                                <div className="col-md-5">
                                    <figure className="d-flex align-items-center">
                                        <div className="me-3">
                                            <img src={Image} className="img-sm img-thumbnail" width={175} />
                                        </div>
                                        <figcaption>
                                            <a href="#" className="title">Blazer Suit Dress Jacket for Men</a>
                                            <p className="text-muted mb-0"> XL size, Jeans, Blue </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-auto">
                                    <select className="form-select w-auto">
                                        <option>1</option>
                                        <option>2</option>
                                        <option selected>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="col-md-2 col-sm-4 col-6">
                                    <div className="price-wrap lh-sm">
                                        <var className="price h6">R$1156.00</var><br />
                                        <small className="text-muted"> R$460.00 / por item </small>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="col-lg-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className="form-label">Have coupon?</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Coupon code" />
                                        <button className="btn btn-light">Apply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

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
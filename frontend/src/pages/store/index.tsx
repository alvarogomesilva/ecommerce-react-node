import Image from '../../assets/image.jpg'
export function Inicial() {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img
                            className="bd-placeholder-img"
                            width="100%" height={500}
                            style={{ objectFit: 'cover' }}
                            src={Image}
                            alt=""
                        />

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="bd-placeholder-img"
                            width="100%" height={500}
                            style={{ objectFit: 'cover' }}
                            src={Image}
                            alt=""
                        />

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="bd-placeholder-img"
                            width="100%" height={500}
                            style={{ objectFit: 'cover' }}
                            src={Image}
                            alt=""
                        />

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h3 className='text-center py-4'>Produtos Destaques</h3>

            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                    <div className="col">
                        <div className="card">
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Titulo Produto</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <a href="#" className="btn btn-primary">
                                    <i className="fa-solid fa-eye"></i>
                                    <span> Ver mais</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <a href="#" className="btn btn-primary">
                                    <i className="fa-solid fa-eye"></i>
                                    <span> Ver mais</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>

                                <a href="#" className="btn btn-primary">
                                    <i className="fa-solid fa-eye"></i>
                                    <span> Ver mais</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <a href="#" className="btn btn-primary">
                                    <i className="fa-solid fa-eye"></i>
                                    <span> Ver mais</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <a href="#" className="btn btn-primary">
                                    <i className="fa-solid fa-eye"></i>
                                    <span> Ver mais</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <a href="#" className="btn btn-primary">
                                    <i className="fa-solid fa-eye"></i>
                                    <span> Ver mais</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row align-items-md-stretch my-5">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white bg-primary rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button className="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button className="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
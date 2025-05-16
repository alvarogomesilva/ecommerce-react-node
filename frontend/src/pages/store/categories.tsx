import Image from '../../assets/image.jpg'


export function Categories() {
    return (
        <>
            <div className='container'>
                <div className="row align-items-md-stretch my-5">
                    <div className="accordion col-md-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Categorias
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p><a href="#" className="link-underline-light">Categoria 1</a></p>
                                    <p><a href="#" className="link-underline-light">Categoria 2</a></p>
                                    <p><a href="#" className="link-underline-light">Categoria 3</a></p>
                                    <p><a href="#" className="link-underline-light">Categoria 4</a></p>
                                    <p><a href="#" className="link-underline-light">Categoria 5</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="h-100 p-3 bg-body-tertiary border rounded-3">

                            <div className="d-flex align-items-center">

                                <input type="password" className="form-control " id="inputPassword2" placeholder="Pesquisar categoria" />
                                <button type="submit" className="btn btn-primary ms-2"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                            <h5 className="my-4">Lista de Categorias</h5>

                            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                                            <ul className="d-flex list-unstyled mt-auto">
                                                <li className="me-auto"> <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" /> </li>
                                                <li className="d-flex align-items-center me-3">
                                                    <svg className="bi me-2" width="1em" height="1em" role="img" aria-label="Location">
                                                        <use xlinkHref="#geo-fill"></use>
                                                    </svg>
                                                    <small>California</small>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <svg className="bi me-2" width="1em" height="1em" role="img" aria-label="Duration">
                                                        <use xlinkHref="#calendar3"></use>
                                                    </svg>
                                                    <small>5d</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                                            <ul className="d-flex list-unstyled mt-auto">
                                                <li className="me-auto"> <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" /> </li>
                                                <li className="d-flex align-items-center me-3">
                                                    <svg className="bi me-2" width="1em" height="1em" role="img" aria-label="Location">
                                                        <use xlinkHref="#geo-fill"></use>
                                                    </svg>
                                                    <small>California</small>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <svg className="bi me-2" width="1em" height="1em" role="img" aria-label="Duration">
                                                        <use xlinkHref="#calendar3"></use>
                                                    </svg>
                                                    <small>5d</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                                            <ul className="d-flex list-unstyled mt-auto">
                                                <li className="me-auto"> <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" /> </li>
                                                <li className="d-flex align-items-center me-3">
                                                    <svg className="bi me-2" width="1em" height="1em" role="img" aria-label="Location">
                                                        <use xlinkHref="#geo-fill"></use>
                                                    </svg>
                                                    <small>California</small>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <svg className="bi me-2" width="1em" height="1em" role="img" aria-label="Duration">
                                                        <use xlinkHref="#calendar3"></use>
                                                    </svg>
                                                    <small>5d</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
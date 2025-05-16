
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
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
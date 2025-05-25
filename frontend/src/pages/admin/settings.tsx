
export function Settings() {
    return (
        <main className="container">
            <div className="col-lg-12">
                <h4 className="my-3">Minha Loja</h4>
                <form className="needs-validation my-5">
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Nome da Loja</label>
                            <input type="text" className="form-control" id="firstName" placeholder=""
                                required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>


                        <div className="col-6">
                            <label htmlFor="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="email" className="form-label">Whatsapp Loja</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="address" className="form-label">Endereço</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="address" className="form-label">Cor</label>
                            <select className="form-select form-control" aria-label="Default select example">
                                <option selected defaultValue={""}>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Texto Destaque Cabeçalho</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Logo</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        </div>

                    </div>
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Atualizar</button>

                </form>
            </div>
        </main>
    )
}
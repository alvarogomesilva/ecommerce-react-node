
export function Dashboard() {
  return (
    <div className="container">
      <div className="row justify-content-between mt-4">
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Categorias</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

          </div>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Sub Categorias</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

          </div>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Produtos</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

          </div>
        </div>
        <div className="card col-6 col-md-3 mx-auto" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Banners</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

          </div>
        </div>
      </div>
    </div>
  )
}
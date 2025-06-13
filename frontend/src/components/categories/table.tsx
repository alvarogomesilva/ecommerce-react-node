import { useState } from "react";
import type { Category } from "../../types/category";
import { useCategories } from "../../hooks/use-categories";
import { toast } from "sonner";

interface TableProps {
  categories: Category[];
}

export function Table({ categories }: TableProps) {
  const { deleteCategory, isPendingDelete } = useCategories()
  const [categoryIdDelete, setCategoryIdDelete] = useState("");

  if (categories.length === 0) {
    return (
      <p className="text-center">Nenhuma categoria cadastrada!</p>
    );
  }

  const handleDeleteCategory = async (id: string) => {
    deleteCategory({ id })

    toast.message("Exclusão de categoria", {
      description: "Categoria excluida com sucesso"
    })
  }

  return (
    <>

      {/* Modal de confirmação */}
      <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Confirmar exclusão</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div className="modal-body">
              Tem certeza que deseja excluir esta categoria?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                disabled={isPendingDelete}
                style={{ width: "120px" }}
                onClick={() => handleDeleteCategory(categoryIdDelete)}
              >
                {isPendingDelete ? (
                  <div className="spinner-border text-light spinner-border-sm" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                ) : (
                  "Excluir"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <table className="table table-sm table-responsive align-middle">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Itens</th>
            <th scope="col">Data cadastro</th>
            <th scope="col" className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>1</td>
              <td>20/10/2024</td>
              <td className="d-flex justify-content-center gap-2">
                <button type="button" className="btn btn-outline-success">
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  onClick={() => setCategoryIdDelete(category.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav className="d-flex justify-content-end" aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

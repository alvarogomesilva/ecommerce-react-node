import { useEffect, useState } from "react";
import type { Category } from "../../types/category";
import { useCategories } from "../../hooks/use-categories";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

interface TableProps {
  categories: Category[];
}

export function Table({ categories }: TableProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<{ name: string }>();

  const {
    deleteCategory,
    isPendingDelete,
    updateModalRef,
    onUpdate
  } = useCategories();

  const [categoryIdDelete, setCategoryIdDelete] = useState("");
  const [categoryIdUpdate, setCategoryIdUpdate] = useState("");
  const [nameCategorySelected, setNameCategorySelected] = useState("");

  const onSubmitUpdate = async (data: { name: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    await onUpdate({ id: categoryIdUpdate, name: data.name });
  };

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory({ id });
  };

  useEffect(() => {
    if (nameCategorySelected) {
      reset({ name: nameCategorySelected });
    }
  }, [nameCategorySelected, reset]);

  if (categories.length === 0) {
    return <p className="text-center">Nenhuma categoria cadastrada!</p>;
  }

  return (
    <>
      {/* MODAL DE EDIÇÃO */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex={-1}
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit(onSubmitUpdate)}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="updateModalLabel">
                  Atualizar Categoria
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">Nome</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={updateModalRef}
                  onClick={() => reset()}
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "120px" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="spinner-border text-light spinner-border-sm" role="status">
                      <span className="visually-hidden">Atualizando...</span>
                    </div>
                  ) : (
                    "Atualizar"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirmar exclusão
              </h5>
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

      {/* TABELA */}
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
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                  onClick={() => {
                    setCategoryIdUpdate(category.id);
                    setNameCategorySelected(category.name);
                  }}
                >
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

      {/* Paginação */}
      <nav className="d-flex justify-content-end" aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" type="button" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item"><button className="page-link" type="button">1</button></li>
          <li className="page-item"><button className="page-link" type="button">2</button></li>
          <li className="page-item"><button className="page-link" type="button">3</button></li>
          <li className="page-item">
            <button className="page-link" type="button" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

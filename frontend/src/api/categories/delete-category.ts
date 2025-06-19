import { toast } from "sonner";
import { api } from "../../lib/axios";

export interface DeleteCategoryBody {
    id: string;
}

export async function deleteCategory({ id }: DeleteCategoryBody) {
    try {
        await api.delete(`/categories/${id}`);
        toast.success("Exclusão de categoria", {
            description: "Categoria excluída com sucesso!",
        });
    } catch (error: any) {
        const message =
            error?.response?.data?.message || "Erro ao excluir a categoria.";
        toast.error("Exclusão de categoria", {
            description: message,
        });
    }
}


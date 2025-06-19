import { useCharacteristics } from "../../hooks/use-characteristics"

export function TableCharacteristics() {
    const { characteristics } = useCharacteristics()

    if (!characteristics) {
        return <p>Carregando características...</p>
    }

    return (
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
                {characteristics.map((characteristic) => (
                    <tr key={characteristic.id}>
                        <td>{characteristic.name}</td>
                        <td>1</td>
                        <td>{new Date(characteristic.createdAt).toLocaleDateString()}</td>
                        <td className="d-flex justify-content-center gap-2">
                            <button type="button" className="btn btn-outline-success">
                                <i className="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

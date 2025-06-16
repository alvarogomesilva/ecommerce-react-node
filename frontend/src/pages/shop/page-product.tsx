import { useParams } from "react-router-dom"

export function PageProduct() {
    const { id } = useParams()
    return (
        <main className="container">
            <h1>Tela do produto: {id}</h1>
        </main>
    )
}
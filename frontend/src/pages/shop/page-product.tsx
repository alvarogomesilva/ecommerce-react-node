import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { listOneProduct } from "../../api/products/list-one-product"
import type { Product } from "../../types/product" 

export function PageProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        async function listOne() {
            if (id) {
                const response = await listOneProduct({id})
                if (response) setProduct(response)
            }
        }

        listOne()
    }, [id])

    return (
        <main className="container">
            <h1>Tela do produto: {product ? product.name : "Carregando..."}</h1>
        </main>
    )
}

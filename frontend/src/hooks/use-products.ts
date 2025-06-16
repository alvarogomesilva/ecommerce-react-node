import { useEffect, useState } from "react"
import type { Product } from "../types/product"
import { getAllProducts } from "../api/products/get-all-products"

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>()
  

    useEffect(() => {
        async function loadAllProducts() {
            const response = await getAllProducts()

            setProducts(response)
        }

        return () => { loadAllProducts() }

    } ,[])



    return { products }
}
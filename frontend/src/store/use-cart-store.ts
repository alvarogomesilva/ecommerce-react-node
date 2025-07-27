import { create } from "zustand"

interface ProductCart {
  id: string
  name: string
  price: number
  image?: string
  quantity: number
  total: number
  characteristics: Record<string, string>
}

interface CartState {
  cart: ProductCart[]
  addProduct: (product: Omit<ProductCart, "total">) => void
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addProduct: (product) => {
    const { cart } = get()

    const existingIndex = cart.findIndex(
      (p) =>
        p.id === product.id &&
        JSON.stringify(p.characteristics) === JSON.stringify(product.characteristics)
    )

    if (existingIndex !== -1) {
      // Produto já existe no carrinho com mesmas características
      const updatedCart = [...cart]
      const existingProduct = updatedCart[existingIndex]
      const newQuantity = existingProduct.quantity + product.quantity
      updatedCart[existingIndex] = {
        ...existingProduct,
        quantity: newQuantity,
        total: newQuantity * existingProduct.price,
      }

      set({ cart: updatedCart })
    } else {
      // Novo produto
      const newProduct: ProductCart = {
        ...product,
        total: product.quantity * product.price,
      }
      set({ cart: [...cart, newProduct] })
    }

    console.log(get().cart)
  },
}))

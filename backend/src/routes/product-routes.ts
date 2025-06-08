import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/products/create-product-controller";



const route = Router()

route.post('/products', isAutenticated, create)


export { route as productsRoutes }
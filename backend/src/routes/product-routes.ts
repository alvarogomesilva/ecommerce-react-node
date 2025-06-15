import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/products/create-product-controller";
import { listAll } from "../controllers/products/list-product-controller";
import upload from "../lib/multer";



const route = Router()

route.post('/products', isAutenticated, upload.single("image"), create)
route.get('/products', listAll)


export { route as productsRoutes }
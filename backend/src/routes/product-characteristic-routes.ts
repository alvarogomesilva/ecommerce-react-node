import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/product-characteristics/create-product-characteristic-controller";

const route = Router()

route.post('/product-characteristics', isAutenticated, create)


export { route as productCharacteristicsRoutes }
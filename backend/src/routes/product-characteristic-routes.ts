import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/product-characteristics/create-product-characteristic-controller";
import { listAll } from "../controllers/product-characteristics/list-product-characteristic-controller ";
import { disable } from "../controllers/product-characteristics/disable-product-characteristic-controller";

const route = Router()

route.post('/product-characteristics', isAutenticated, create)
route.get('/product-characteristics/:id', listAll)
route.patch('/product-characteristics/:id', isAutenticated, disable)


export { route as productCharacteristicsRoutes }
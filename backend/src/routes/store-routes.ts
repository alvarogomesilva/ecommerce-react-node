import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { update } from "../controllers/store/update-store-controller";
import { getStore } from "../controllers/store/get-store-controller";


const route = Router()

route.patch('/stores', isAutenticated, update)
route.get('/stores/:id', getStore)


export { route as storeRoutes }
import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { update } from "../controllers/store/update-store-controller";


const route = Router()

route.patch('/stores', isAutenticated, update)


export { route as storeRoutes }
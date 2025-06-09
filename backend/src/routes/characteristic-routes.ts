import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/characteristics/create-characteristic-controller";
import { listAll } from "../controllers/characteristics/list-characteristic-controller";


const route = Router()

route.post('/characteristics', isAutenticated, create)
route.get('/characteristics', isAutenticated, listAll)


export { route as characteristicRoutes }
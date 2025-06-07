import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/characteristics/create-characteristic-controller";


const route = Router()

route.post('/characteristics', isAutenticated, create)


export { route as characteristicRoutes }
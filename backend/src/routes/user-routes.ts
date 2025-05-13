import { Router } from "express";
import { create } from "../controllers/users/create-user-controller";
import { autenticate } from "../controllers/users/auth-user-controller";


const route = Router()

route.post('/users', create)
route.post('/session', autenticate)

export { route as usersRoutes }
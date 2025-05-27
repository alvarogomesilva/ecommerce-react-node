import { Router } from "express";
import { create } from "../controllers/users/create-user-controller";
import { autenticate } from "../controllers/users/auth-user-controller";
import { profile } from "../controllers/users/profile-user-controller";
import { isAutenticated } from "../middlewares/isAutenticated";
import { update } from "../controllers/users/update-user-controller";


const route = Router()

route.post('/users', create)
route.post('/session', autenticate)

route.get('/me', isAutenticated, profile)
route.patch('/users', isAutenticated, update)

export { route as usersRoutes }
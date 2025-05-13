import { Router } from "express";
import { create } from "../controllers/users/create-user-controller";
import { autenticate } from "../controllers/users/auth-user-controller";
import { profile } from "../controllers/users/profile-user-controller";


const route = Router()

route.post('/users', create)
route.post('/session', autenticate)

route.get('/me', profile)

export { route as usersRoutes }
import { Router } from "express";
import { create } from "../controllers/users/create-user-controller";


const route = Router()

route.post('/users', create)

export { route as usersRoutes }
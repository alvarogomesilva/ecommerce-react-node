import { Router } from "express";
import { create } from "../controllers/categories/create-category-controller";
import { isAutenticated } from "../middlewares/isAutenticated";

const route = Router()

route.post('/categories', isAutenticated, create)

export { route as categoriesRoutes }
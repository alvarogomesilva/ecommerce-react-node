import { Router } from "express";
import { create } from "../controllers/categories/create-category-controller";
import { isAutenticated } from "../middlewares/isAutenticated";
import { listAll } from "../controllers/categories/list-all-category-controller";

const route = Router()

route.post('/categories', isAutenticated, create)
route.get('/categories', isAutenticated, listAll)

export { route as categoriesRoutes }
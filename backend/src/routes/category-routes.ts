import { Router } from "express";
import { create } from "../controllers/categories/create-category-controller";
import { isAutenticated } from "../middlewares/isAutenticated";
import { listAll } from "../controllers/categories/list-all-category-controller";
import { remove } from "../controllers/categories/delete-category-controller";

const route = Router()

route.post('/categories', isAutenticated, create)
route.get('/categories', isAutenticated, listAll)
route.delete('/categories/:id', isAutenticated, remove)

export { route as categoriesRoutes }
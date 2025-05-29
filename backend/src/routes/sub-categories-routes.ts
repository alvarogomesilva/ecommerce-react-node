import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { create } from "../controllers/sub-categories/create-sub-categories-controller";

const route = Router()

route.post('/sub-categories', isAutenticated, create)

export { route as subCategoriesRoutes }
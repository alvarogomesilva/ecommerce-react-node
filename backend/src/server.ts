import express, { json, static as static_ } from 'express'
import { usersRoutes } from './routes/user-routes'
import { errorHandler } from './middlewares/error-handler'
import cors from 'cors';
import { categoriesRoutes } from './routes/category-routes';
import { storeRoutes } from './routes/store-routes';
import { subCategoriesRoutes } from './routes/sub-categories-routes';
import { characteristicRoutes } from './routes/characteristic-routes';
import { productsRoutes } from './routes/product-routes';
import { productCharacteristicsRoutes } from './routes/product-characteristic-routes';
import { resolve } from 'node:path';

const app = express()

app.use('/files', static_(resolve(__dirname, '..', 'uploads')))

app.use(cors())
app.use(json())


app.use(usersRoutes)
app.use(categoriesRoutes)
app.use(subCategoriesRoutes)
app.use(storeRoutes)
app.use(characteristicRoutes)
app.use(productsRoutes)
app.use(productCharacteristicsRoutes)

app.use(errorHandler)

app.listen(3333, () => console.log(`Server on listening on port 3333`))
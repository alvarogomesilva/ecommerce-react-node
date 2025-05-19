import express, { json } from 'express'
import { usersRoutes } from './routes/user-routes'
import { errorHandler } from './middlewares/error-handler'
import cors from 'cors';
const app = express()

app.use(cors())
app.use(json())


app.use(usersRoutes)

app.use(errorHandler)

app.listen(3333, () => console.log(`Server on listening on port 3333`))
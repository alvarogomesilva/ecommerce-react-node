import express, { json } from 'express'
import { usersRoutes } from './routes/user-routes'

const app = express()

app.use(json())


app.use(usersRoutes)

app.listen(3333, () => console.log(`Server on listening on port 3333`))
import express,{urlencoded,json} from 'express'
import Routes from './routes/Routes'
const app = express()

app.use(urlencoded({extended:true}))
app.use(json())

app.use("/users",Routes.userRouter)
app.use("/admin",Routes.adminRoutes)
app.use("/auth",Routes.authRoutes)

app.listen(3000)
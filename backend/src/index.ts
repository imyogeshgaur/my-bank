import express,{urlencoded,json} from 'express'
const app = express()

app.use(urlencoded({extended:true}))
app.use(json())

// app.use("/users",userRouter)

app.listen(3000)
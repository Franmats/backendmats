//Librerias y FrameWorks
import express from "express"
import cors from "cors"
import config from "./config/config.js"

//Rutas
import routerProducts from "./routes/products.router.js"
import routerCategories from "./routes/categories.router.js"

const app = express()
app.use(cors({credentials: true,methods:["GET","POST","PUT","DELETE"],allowedHeaders: ['Content-Type', 'Authorization']}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//Rutas Principales
app.use("/api/products",routerProducts)
app.use("/api/categories",routerCategories)



//Apertura de Servidor
app.listen(config.port,()=>{console.log("listen")})
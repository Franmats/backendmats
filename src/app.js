//Librerias y FrameWorks
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import session from "express-session"
import config from "./config/config.js"

//Rutas
import routerProducts from "./routes/products.router.js"
import routerCategories from "./routes/categories.router.js"
import routerUsers from "./routes/users.router.js"

import __dirname from "./utils.js"
import initializePassport from "./config/passport.config.js"

const app = express()
app.use(cors({credentials: true,methods:["GET","POST","PUT","DELETE"],allowedHeaders: ['Content-Type', 'Authorization'],origin:"http://localhost:5173"}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: false,
       /*  domain: 'front-of-backend-cuenca.vercel.app',  */
        maxAge: 3600000, 
    }
}))



//Rutas Principales
app.use("/products",routerProducts)
app.use("/categories",routerCategories)
app.use("/user", routerUsers)



//Apertura de Servidor
initializePassport()
app.listen(config.port,()=>{console.log("listen")})
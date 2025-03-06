import config from "../config/config.js"
import mongoose from "mongoose"

export let Products
export let Categories
export let Users

console.log(`Persistencia con ${config.persistence}`)

switch (config.persistence) {
    case "MONGO":
        mongoose.connect(config.dbUrl,{
            dbName:config.dbName
        })

        const {default: ProductsMongo } = await import("./mongoManager/products.js")
        const {default: CategoriesMongo } = await import("./mongoManager/categories.js")
        const {default: UserMongo } = await import("./mongoManager/users.js")

        
 
        Products = ProductsMongo
        Categories = CategoriesMongo
        Users = UserMongo
       
        break;

    default:

        console.log("Error en factory");
        break;
}
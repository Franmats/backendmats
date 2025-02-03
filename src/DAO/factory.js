import config from "../config/config.js"
import mongoose from "mongoose"

export let Products
export let Categories

console.log(`Persistencia con ${config.persistence}`)

switch (config.persistence) {
    case "MONGO":
        mongoose.connect(config.dbUrl,{
            dbName:config.dbName
        })

        const {default: ProductsMongo } = await import("./mongoManager/products.js")
        const {default: CategoriesMongo } = await import("./mongoManager/categories.js")
        
 
        Products = ProductsMongo
        Categories = CategoriesMongo
       
        break;

    default:

        console.log("Error en factory");
        break;
}
import { Router } from "express";
import { getProducts , createProduct, updateStockProduct,deleteProduct,getProductsByCategory, updateStatusProduct, getProductByID,updateInfoById, getProductsByUser } from "../controllers/products.controller.js";
import { passportCall,authorization } from "../utils.js";
const router = Router()

// ADMINISTRADOR DEL SISTEMA COMPLETO
router.get("/",passportCall("jwt",{ session: false }),authorization( "admin" ),getProducts)
router.post("/",passportCall("jwt",{ session: false }),authorization( "admin" ),createProduct)



//CLIENTE DEL RESTAURANTE

router.get("/:resto/:product",getProductsByCategory)



//ENCARGADO DEL RESTAURANTE
router.put("/:id",passportCall("jwt",{ session: false }),authorization( "user" ),updateInfoById)
router.get("/:id",passportCall("jwt",{ session: false }),authorization( "user" ),getProductByID)
router.get("/user/products/getforuser", passportCall("jwt",{ session: false }),authorization( "user" ), getProductsByUser)

router.put("/:id/:status",passportCall("jwt",{ session: false }),authorization( "user" ) ,updateStatusProduct)

router.put("/:pid/stock/:num",updateStockProduct)

router.delete("/:id",passportCall("jwt",{ session: false }),authorization( "user" ), deleteProduct)




export default router
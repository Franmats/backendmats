import { Router } from "express";
import { createCategorie, deleteCategorie, getCategorieById, getCategories ,getCategoriesByName, updateInfoById } from "../controllers/categories.controller.js";
import { passportCall,authorization } from "../utils.js";

const router = Router()

//ADMINISTRADOR DEL SISTEMA
router.get("/",passportCall("jwt",{ session: false }),authorization( "admin" ),getCategories)
router.get("/byid/:id",passportCall("jwt",{ session: false }),authorization( "admin" ),getCategorieById)
router.post("/",passportCall("jwt",{ session: false }),authorization( "admin" ),createCategorie)
router.put("/:id",passportCall("jwt",{ session: false }),authorization( "admin" ),updateInfoById)
router.delete("/:id",passportCall("jwt",{ session: false }),authorization( "admin" ),deleteCategorie)

// CLIENTE DEL RESTAURANTE
router.get("/:nombre", getCategoriesByName)


// ENCARGADO DEL RESTAURANTE
export default router
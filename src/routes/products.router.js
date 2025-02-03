import { Router } from "express";
import { getProducts , createProduct, updateStockProduct,deleteProduct,getProductsByCategory, updateStatusProduct, getProductByID,updateInfoById } from "../controllers/products.controller.js";

const router = Router()

router.get("/",getProducts)
router.get("/:id",getProductByID)
router.put("/:id",updateInfoById)
router.get("/:resto/:product",getProductsByCategory)

router.post("/",createProduct)

router.put("/:id/:status", updateStatusProduct)

router.put("/:pid/stock/:num",updateStockProduct)

router.delete("/:id", deleteProduct)

export default router
import { Router } from "express";
import { getCategories ,getCategoriesByName } from "../controllers/categories.controller.js";

const router = Router()

router.get("/",getCategories)


router.get("/:nombre", getCategoriesByName)

export default router
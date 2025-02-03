import {Categories, Products } from "../factory.js";

import ProductsRepository from "./products.repository.js"
import CategoriesRepository from "./categories.repository.js";

export const productsService = new ProductsRepository(new Products())
export const categoriesService = new CategoriesRepository(new Categories())
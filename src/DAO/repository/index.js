import {Categories, Products, Users } from "../factory.js";

import ProductsRepository from "./products.repository.js"
import CategoriesRepository from "./categories.repository.js";
import UsersRepository from "./users.repository.js";

export const productsService = new ProductsRepository(new Products())
export const categoriesService = new CategoriesRepository(new Categories())
export const usersService = new UsersRepository(new Users())
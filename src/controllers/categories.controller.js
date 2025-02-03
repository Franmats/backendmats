import {categoriesService} from "../DAO/repository/index.js"
//CONTROLLER DE ADMIN
//Muestra todas las categorias que existen de todos los restaurantes
export const getCategories = async(req,res) => {
    const result  = await categoriesService.getCategories()
    console.log(result)
    if (result) {
        res.send({status:"success", payload:result})
    }else {
        res.send({status:"GetError", payload:[]})
    }
}

//Mostrar categorias segun el nombre del restaurante
export const getCategoriesByName = async (req,res) => {
    const nombre = req.params.nombre
    console.log("categoris",nombre)
    const result = await categoriesService.getCategoriesByName(nombre)
    if (result) {
        res.send({status:"success", payload:result})
    }else {
        res.send({status:"GetError", payload:[]})
    }
}


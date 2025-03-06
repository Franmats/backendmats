import {categoriesService} from "../DAO/repository/index.js"
//CONTROLLER DE ADMIN
//Muestra todas las categorias que existen de todos los restaurantes
export const getCategories = async(req,res) => {
    const result  = await categoriesService.getCategories()
    if (result) {
        res.send({status:"success", payload:result})
    }else {
        res.send({status:"GetError", payload:[]})
    }
}

//Mostrar categorias segun el nombre del restaurante
export const getCategoriesByName = async (req,res) => {
    const nombre = req.params.nombre

    const restaurantExist = async (ad)=> {
            const dataRestaurante = ["demo"]
            const a = dataRestaurante.filter(e => e == ad)
            if ( a.length > 0) {
                return true
            } else {
                return false
            }
        }
    
    const bolean2= await restaurantExist(nombre)
        if  (bolean2 == false ) {
            return res.status(400).json({ status: "error", message: "ParamsError" });//
          }
        
        try {
            const result = await categoriesService.getCategoriesByName(nombre)
            res.send({status:"success", payload:result})
        } catch (error) {
            res.send({status:"failed", payload:[]})
        }
        
}

export const createCategorie = async (req,res) => {
    const categoria = req.body
    console.log(categoria)
    const a = {image : categoria.imagen,
        nombre: categoria.subCategory,
        resto: categoria.idCategoria }
    console.log(a)
     try {
        const result = await categoriesService.createCategorie(a)
        console.log(result)
         res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
        
}
export const deleteCategorie = async (req,res) => {
    const categoria = req.params.id
    
    console.log(categoria)
     try {
        const result = await categoriesService.deleteCategorie(categoria)
        console.log(result)
         res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
        
}
export const getCategorieById = async (req,res) => {
    const categoria = req.params.id
    
     try {
        const result = await categoriesService.getCategorieById(categoria)
        console.log(result)
         res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
        
}
export const updateInfoById = async (req,res) => {
    const categoria = req.params.id
    const data = req.body
    console.log(data)
    console.log(categoria)
     try {
        const result = await categoriesService.updateInfoById(id,data)
        console.log(result)
         res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
        
}


import {productsService} from "../DAO/repository/index.js"
//CONTROLLER DE ADMIN
export const getProducts = async(req,res) => {
    const result  = await productsService.getProducts()
    console.log(result)
    if (result) {
        res.send({status:"success", payload:result})
    }else {
        res.send({status:"GetError", payload:[]})
    }
}

export const getProductByID = async (req,res) => {
    const id = req.params.id
    const result = await productsService.getProductByID(id)
    try {
    
        res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
}

export const createProduct = async (req,res) => {
    const product = req.body
    console.log(product)
    const result = await productsService.createProduct(product)
    try {
        res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
    
}

export const updateStockProduct = async (req,res)=> {
    const id = req.params.pid
    const number = req.params.num

    const result = await productsService.updateStockProduct(id,number)
    res.send({status:"success", payload:result})
}

export const deleteProduct = async(req, res) => {
    const id = req.params.id
    const result = await productsService.deleteProduct(id)

    if (result) {
        res.send({status:"success", payload:result})
    }else {
        res.send({status:"DeleteError", payload:[]})
    }
}

//TRAER LAS CATEGORIES CON VALIDACIONDE DATOS
/* export const getProductsByCategory = async (req,res) => {
    let product = req.params.product
    let resto = req.params.resto
    if  (( product !== "PIZZAS" && product !== "PAPAS FRITAS" && product !== "SNACKS" && product !=="HAMBURGUESAS" && product !== "PANCHOS" && product !=="COMBOS"  ) || (resto !== "demo") ) {
        return res.status(400).json({ status: "error", message: "ParamsError" });//
      }

    const data1 = {restaurante : resto,
            producto:product
    }
    console.log(product,resto)

    
    try {
        const result = await productsService.getProductsByCategory(data1)
        res.send({status:"success", payload:result})
        console.log(result)
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
    
} */

//Con funcion de Validacion de datos
export const getProductsByCategory = async (req,res) => {
    let product = req.params.product
    let resto = req.params.resto

    const categorieExist = async (as,ad)=> {
        const dataCategorie = ["PIZZAS","PAPAS FRITAS", "SNACKS", "HAMBURGUESAS", "PANCHOS", "COMBOS","POSTRES", "COMIDAS"]
        const dataRestaurante = ["demo"]
        const a = dataRestaurante.filter(e => e == ad)
        const filterData = dataCategorie.filter(e => e == as)
        if (filterData.length > 0 && a.length > 0) {
            return true
        } else {
            return false
        }
    }

    const bolean2= await categorieExist(product,resto)
    if  (bolean2 == false ) {
        return res.status(400).json({ status: "error", message: "ParamsError" });//
      }

    const data1 = {restaurante : resto,
            producto:product
    }

    
    try {
        const result = await productsService.getProductsByCategory(data1)
        res.send({status:"success", payload:result})
        console.log(result)
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
    
}




//OK
export const updateStatusProduct = async(req,res) => {
    const id = req.params.id
    let estado = req.params.status

    if (estado !== "activo" && estado !== "desactivado") {
        return res.status(400).json({ status: "error", message: "Estado inválido" });
      }

    if (estado === "activo") {
        estado = "desactivado"
    }else if (estado === "desactivado") {
        estado = "activo"
    }

    try {
    
        const result = await productsService.updateStatusProduct(id,estado)
        if(result) {
            res.send({status:"success", payload:result})
        }else {
            res.send({status:"error al actualizar", payload:[]})
        }
        
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
    

}
//TRAER LOS PRODUCTOS SEGUN EL USUARIO
export const getProductsByUser = async (req,res) => {
    const user = req.user.user
    console.log(user.place)
    try {
        const result = await productsService.getProductsByUser(user.place)
        if(result) {
            res.send({status:"success", payload:result})
        }else {
            res.send({status:"error al enviar", payload:[]})
        }

    } catch (error) {
        res.send({status:"failed", payload:[]})
    }

}
export const updateInfoById = async (req,res) => {
    const id = req.params.id
    const data = req.body
    console.log(data)
    const result = await productsService.updateInfoById(id,data)
    try {
        res.send({status:"success", payload:result})
    } catch (error) {
        res.send({status:"failed", payload:[]})
    }
    
}


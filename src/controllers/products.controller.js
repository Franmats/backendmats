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
    res.send({status:"success", payload:result})
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
export const getProductsByCategory = async (req,res) => {
    let product = req.params.product
    let resto = req.params.resto
    console.log(resto)

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
    
}

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


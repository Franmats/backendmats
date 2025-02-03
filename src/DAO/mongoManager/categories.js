import ProductModel from "./models/category.model.js"

export default class Category {

    getCategories = async () => { return await ProductModel.find()}

    getCategoriesByName = async (nombre) => { return await ProductModel.find({resto:nombre})}

    getProductByCategory = async (id) => { return await ProductModel.findById(id)}

    createProduct = async (product) =>  { return await  ProductModel.create(product)}

    updateStockProduct = async (id,number) => {return await ProductModel.updateOne({_id:id},{$set:{stock:number}})}

    deleteProduct = async(id) => { return await ProductModel.deleteOne({_id:id})}

}
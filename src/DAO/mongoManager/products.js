import ProductModel from "./models/products.model.js"

export default class Product {

    getProducts = async () => { return await ProductModel.find()}


    getProductByID = async (id) => { return await ProductModel.findById(id)}

    updateInfoById = async (id, data) => {return await ProductModel.findByIdAndUpdate(id, { $set: data }, { new: true })}

    getProductsByCategory = async (data1) => { return await ProductModel.find({$and: [{ subCategory: data1.producto}, {idCategoria: data1.restaurante} ]})}

    getProductsByUser = async (resto1) => { return await ProductModel.find({idCategoria:resto1})}

    createProduct = async (product) =>  { return await  ProductModel.create(product)}

    updateStockProduct = async (id,number) => {return await ProductModel.updateOne({_id:id},{$set:{stock:number}})}

    updateStatusProduct = async (id,estado) => {return await ProductModel.updateOne({_id:id},{$set:{status:estado}})}

    deleteProduct = async(id) => { return await ProductModel.deleteOne({_id:id})}

}
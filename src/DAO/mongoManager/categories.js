import ProductModel from "./models/category.model.js"

export default class Category {

    getCategories = async () => { return await ProductModel.find()}

    getCategoriesByName = async (nom) => { return await ProductModel.find({resto:nom})}

    getCategorieById = async (id) => { return await ProductModel.findById(id)}

    updateInfoById = async (id, data) => {return await ProductModel.findByIdAndUpdate(id, { $set: data }, { new: true })}

    createCategorie = async (categorie) =>  { return await  ProductModel.create(categorie)}

    deleteCategorie = async(id) => { return await ProductModel.deleteOne({_id:id})}

}
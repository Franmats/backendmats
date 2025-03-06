import mongoose from "mongoose";

const productModel = mongoose.model("products", new mongoose.Schema({
    nombre: {type:String, required:true},
    idCategoria:{type:String, required:true},
    subCategory:{type:String, required:true},
    descripcion:{type:String, required:true},
    imagen:{type:String, required:true},
    status:{type:String, required:true},
    precio:Number,
}))



export default productModel
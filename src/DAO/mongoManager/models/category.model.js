import mongoose from "mongoose";

const categoriesModel = mongoose.model("categories", new mongoose.Schema({
    image: {type:String, required:true},
    nombre:{type:String, required:true},
    resto:{type:String, required:true},
}))



export default categoriesModel
import mongoose from "mongoose";

const UserModel = mongoose.model("users", new mongoose.Schema({
    fullname:String,
    email: {
        type:Object,
        unique:true
    },
    password:String,
    place:String,
    first_name:String,
    role: {
        type:String,
        default: 'user'
    },
}))



export default UserModel

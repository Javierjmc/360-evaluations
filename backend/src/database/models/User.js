import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    username: {
        type:String,
        unique: true
    },
    name: String,
    email: {
        type:String,
        unique: true
    },
    password: String,
    role: String
})

const User = mongoose.model("User", UserSchema)

export default User
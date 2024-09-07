import mongoose, { Schema } from "mongoose"


const EmployeeSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    }  
})

const Employee = mongoose.model("Employee", EmployeeSchema)

export default Employee
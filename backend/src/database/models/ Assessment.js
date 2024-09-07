import mongoose, { Schema } from "mongoose"


const AssessmentSchema = new Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    performance: {
        type: String,
        required: true
    }  
})

const Assessment = mongoose.model("Assessment", AssessmentSchema)

export default Assessment
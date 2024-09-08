import mongoose, { Schema } from "mongoose"


const AssessmentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comunication: {
        type: String,
        required: true
    },
    teamwork: {
        type: String,
        required: true
    },
    problemSolving: {
        type: String,
        required: true
    },
    leadership: {
        type: String,
        required: true
    },
    adaptability: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }


})

const Assessment = mongoose.model("Assessment", AssessmentSchema)

export default Assessment
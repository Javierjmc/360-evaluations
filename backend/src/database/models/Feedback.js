import mongoose, { Schema } from "mongoose"


const FeedbackSchema = new Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    comment: {
        type: String,
        required: true
    }  
})

const Feedback = mongoose.model("Feedback", FeedbackSchema)

export default Feedback
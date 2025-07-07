import mongoose from "mongoose";

export const incomeSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxlength: 50

        },
        amount:{
            type: Number,
            required: true,
            maxlength: 20
        },
        type:{
            type: String,
            default: "income"
        },
        date:{
            type: Date,
            required: true,

        },
        description:{
            type: String,
            required: true,
        }
    },{timestamps: true}
)
export const incomeModel =mongoose.model('income',incomeSchema)
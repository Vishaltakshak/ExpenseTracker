import { expenseModel } from "../models/expenseModel.js"
export const getExpense = async(req, res)=>{
    try {
        const expenses = await expenseModel.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message:"server error"})
        
    }

}

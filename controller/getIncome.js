import { incomeModel } from "../models/incomeModel.js"; // Make sure to import the model

export const getIncome = async (req, res) => {
    try {
        // Use the model to find income records
        const income = await incomeModel.find().sort({ createdAt: -1 }); // Use incomeModel instead of incomeSchema
        res.status(200).json(income); // Corrected req.status to res.status
    } catch (error) {
        console.error('Error retrieving income:', error); // Log the error for debugging
        res.status(500).json({ message: "Server error" });
    }
};

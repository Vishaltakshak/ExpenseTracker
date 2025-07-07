import { incomeModel } from "../models/incomeModel.js";

export const deleteIncome = async (req, res) => {
    const { id } = req.params; // Destructure the id from req.params

    try {
        const income = await incomeModel.findByIdAndDelete(id); // Use await for better error handling

        if (!income) {
            return res.status(404).json({ message: "Income not found" }); // Handle case where income does not exist
        }

        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        console.error('Error deleting income:', error); // Log the error for debugging
        res.status(500).json({ message: "Server error" });
    }
};

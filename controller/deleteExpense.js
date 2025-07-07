import { expenseModel } from '../models/expenseModel.js'; // Ensure you import the correct model

export const deleteExpense = async (req, res) => {
    const { id } = req.params; // Destructure the ID from the request parameters

    try {
        const deletedExpense = await expenseModel.findByIdAndDelete(id); // Use await for the async operation

        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" }); // Handle case where expense doesn't exist
        }

        res.status(200).json({ message: "Expense deleted successfully" }); // Confirm deletion
    } catch (err) {
        console.error('Error deleting expense:', err); // Log the error for debugging
        res.status(500).json({ message: "Server error" }); // Handle server errors
    }
};
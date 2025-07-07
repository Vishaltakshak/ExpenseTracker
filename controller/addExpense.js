import { expenseModel } from "../models/expenseModel.js";

export const addExpense = async (req, res) => {
    const { title, amount, description, date } = req.body;

    try {
        if (!title || !amount || !description || !date) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const expense = new expenseModel({
            title,
            amount,
            description,
            date
        });

        await expense.save();
        res.status(201).json({ message: "Expense saved successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
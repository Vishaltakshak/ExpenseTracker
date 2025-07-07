import { config } from "dotenv";
import { request, response } from "express";
import { incomeModel } from "../models/incomeModel.js"; // Ensure you import the model correctly

export const addIncome = async (req, res) => {
    console.log(req.body); // Log the incoming request body
    const { title, amount, description, date } = req.body;

    // Check for required fields
    if (!title || !amount || !description || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const income = new incomeModel({
        title,
        amount,
        description,
        date
    });

    try {
        await income.save(); // Save the income to the database
        res.status(200).json({ message: "Details saved" }); // Corrected the response status
    } catch (error) {
        console.error('Error saving income:', error); // Log the error for debugging
        res.status(500).json({ message: 'Server error' });
    }
};

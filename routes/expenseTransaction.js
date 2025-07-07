import express from "express";
import { addExpense } from "../controller/addExpense.js";
import { getExpense } from "../controller/getExpense.js";
import { deleteExpense } from "../controller/deleteExpense.js";
export const ExpenseRouter = express.Router();

ExpenseRouter.post('/',addExpense);
ExpenseRouter.get('/',getExpense);
ExpenseRouter.delete('/:id',deleteExpense);

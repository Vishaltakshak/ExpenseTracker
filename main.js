import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { response } from "express";
import { db } from "./db/db.js";
import { IncomeRouter } from "./routes/IncomeTransaction.js";
import { ExpenseRouter } from "./routes/expenseTransaction.js";
import { addIncome } from "./controller/addIncome.js";
import { addExpense } from "./controller/addExpense.js";
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({}));
app.use('/api/expenses', ExpenseRouter);
app.use('/api/incomes',IncomeRouter);

const PORT = process.env.PORT;
const server=()=>{
    db()
    app.listen(PORT, ()=>{
        console.log('listening')
    })

}
server()
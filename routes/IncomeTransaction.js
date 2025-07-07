import { addIncome} from "../controller/addIncome.js";
import { deleteIncome } from "../controller/deleteIncome.js";
import { getIncome } from "../controller/getIncome.js";
import express from "express"

export const IncomeRouter = express.Router()
IncomeRouter.post('/',addIncome)
IncomeRouter.get('/',getIncome)
IncomeRouter.delete('/:id',deleteIncome)



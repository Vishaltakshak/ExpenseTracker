import mongoose from "mongoose";
export const db = async()=>{
    try {
        await mongoose.connect(process.env.DatabaseLInk)
        console.log("connected to db")

    } catch (error) {
        throw error
        
    }
}

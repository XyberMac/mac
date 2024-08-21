import mongoose from "mongoose"

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Connected to datebase");
        
    } catch (error) {
        console.log("Error connecting to database");
        
    }
}

export default connectDB


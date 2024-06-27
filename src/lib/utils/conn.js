import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:'innstay'
    })
    console.log(`Connected DB`)
    return
}

export default connectDB
import Room from "@/lib/models/room"
import connectDB from "@/lib/utils/conn"
import { NextResponse } from "next/server"



export const GET = async()=>{
    try {
        await connectDB()

        const result = await Room.find().limit(5)
        return new NextResponse(JSON.stringify(result),{
            status:200
        })
        
    } catch (error) {
        return new NextResponse(error,{
            status:500
        })
    }
}
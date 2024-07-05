import Room from "@/lib/models/room"
import connectDB from "@/lib/utils/conn"
import { NextResponse } from "next/server"

export const GET = async (req) => {
  const id = req.url.split('/').slice(-1)[0]
  console.log('id',id)
  try {
    await connectDB()
    const room = await Room.findById(id)  
    return NextResponse.json(room, { status: 200 })
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}

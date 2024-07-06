import Room from "@/lib/models/room"
import User from "@/lib/models/user"
import connectDB from "@/lib/utils/conn"
import { NextResponse } from "next/server"

export const GET = async (req) => {
  const id = req.url.split('/').slice(-1)[0]
  try {
    await connectDB()
    const room = await Room.findById(id)  
    const own = await User.findById(room.owner)
    const owner = {name:own.name,email:own.email}
    const result = {room:room,owner:owner}
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return new Response(error, {
      status: 500,
    })
  }
}

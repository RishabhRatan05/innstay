import connectDB from "@/lib/utils/conn"
import User from "@/lib/models/user"
import Room from "@/lib/models/room"
import { headers } from "next/headers"
import jwt from 'jsonwebtoken'

const useToken=async(token)=>{
    const {email} = await jwt.verify(token,process.env.JSON_SECRET)
    return email
}


export const POST = async(req,res)=>{
    const {title, desc, url,wifi,shower,food,location} = await req.json()
      const headersList = headers()
      const token = headersList.get("authorization")

    try {
        await connectDB()
        
        const email =await useToken(token)
        const user = await User.find({email})
        console.log('user',user)
        const {_id}  = user

      const room = await Room.create({title,desc,url,owner:_id,location,wifi:wifi=='on'?true:false,shower:shower=='on'?true:false,food:food=='on'?true:false})

      console.log('room',room)
      if(room) return new Response({
        status:201,
        message:"Room created"
      })



    } catch (error) {
        return new Error("Could not create room")
    }
}
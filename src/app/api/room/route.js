import connectDB from "@/lib/utils/conn"
import User from "@/lib/models/user"
import Room from "@/lib/models/room"
import { headers } from "next/headers"
import jwt from 'jsonwebtoken'

const getEmail=(token)=>{
    const email =  jwt.verify(token,process.env.JSON_SECRET)
    return email
}


export const POST = async(req,res)=>{
    const {title, desc, url,wifi,shower,food,location} = await req.json()
      const headersList = headers()
      const token = headersList.get("authorization")

    try {
        await connectDB()
        
        const email = getEmail(token)
        const user = await User.find({email:email})
        // console.log('user',user)
        const {_id}  = user

      const room = await Room.create({title,desc,url,owner:_id,location,wifi:wifi?true:false,shower:shower?true:false,food:food?true:false})

      console.log('room',room)

      if(room==[]) return new Response({status:500,message:"Could not create room"}) 
      
      return new Response({
        status:201,
        message:"Room created"
      })



    } catch (error) {
        return new Response("Could not create room",error)
    }
}
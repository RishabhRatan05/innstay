import connectDB from "@/lib/utils/conn"
import User from "@/lib/models/user"
import Room from "@/lib/models/room"
import { headers } from "next/headers"
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server"

const getEmail=(token)=>{
    const email =  jwt.verify(token,process.env.JSON_SECRET)
    return email
}

export const GET = async(req,res)=>{
        const headersList = headers()
        const token = headersList.get('authorization')
        try {
          await connectDB()

          const email = getEmail(token)

          const user = await User.find({email:email})
          const {_id} = user[0] 

          const roomList = await Room.find({owner:_id})

          return NextResponse.json(roomList,{status:200})


        } catch (error) {
          return new Response(error,{
            status:500
          })
        }
}


export const POST = async(req,res)=>{
    const {title, desc, url,wifi,shower,food,location,price} = await req.json()
      const headersList = headers()
      const token = headersList.get("authorization")

    try {
        await connectDB()
        
        const email = getEmail(token)
        const user = await User.find({email:email})
        const {_id}  = user[0]

      const room = await Room.create({title,desc,url,price,owner:_id,location,wifi:wifi?true:false,shower:shower?true:false,food:food?true:false})
      
      await User.findByIdAndUpdate(_id, { $push: { rooms: room._id } })

      if(room==[]) return new Response({status:500,message:"Could not create room"}) 
      
      return new Response({
        message:"Room created"
      },{status:201})



    } catch (error) {
        return new Response("Could not create room",error)
    }
}


export const PUT = async (req, res) => {
  const { title, desc, url, wifi, shower, food, location, price } =
    await req.json()
  const headersList = headers()
  const id = headersList.get("id")
  try {
    await connectDB()

    const room = await Room.findByIdAndUpdate(id,{
      title:title,
      desc:desc,
      url:url,
      price:price,
      location:location,
      wifi: wifi ? true : false,
      shower: shower ? true : false,
      food: food ? true : false,
    })

    if (room == [])
      return new Response("Could not update room" ,{status:501})

    return new Response(
      {
        message: "Room Updated",
      },
      { status: 201 }
    )
  } catch (error) {
    return new Response(error,{status:500})
  }
}


export const DELETE =async(req)=>{
      const _id =  await req.json()
      try {
        await connectDB()

        const room = await Room.findByIdAndDelete(_id)
        return new NextResponse('Deleted successfully',{
          status:200
        })
        
      } catch (error) {
        return new NextResponse('Could not delete',{
          status:500
        })
        
      }
}
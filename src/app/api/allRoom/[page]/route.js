import Room from "@/lib/models/room"
import connectDB from "@/lib/utils/conn"
import { NextResponse } from "next/server"


export const GET = async (searchParams) => {
    const page= searchParams.url.split('/').slice(-1)[0]
  try {
    await connectDB()
    const result = await Room.find()
    const totalPage = Math.ceil(result.length/10)
    const startInd = (page - 1) * 10
    const endInd = page * 10
    const roomsList = result.slice(startInd, endInd)
    const res ={data:roomsList, totalPage:totalPage}
    return NextResponse.json(res, {
      status: 200,
    })
  } catch (error) {
    return new Response(error, { status: 500 })
  }
}

export const POST = async (req) => {
  let page = req.url.split("/").slice(-1)[0]
  if(typeof(page)=='undefined'){
    page=1
  }
  let {price,wifi,shower,food,search} = await req.json()
  
  const queryObject ={}
  Object.keys(queryObject).forEach((key) => {
    delete queryObject[key]
  })
  if(typeof(price)!='undefined') queryObject.price ={$lte:price}
  if(typeof(search)!='undefined') {queryObject.location = { $regex: search, $options: "i" }}
                                      // queryObject.location= {$regex:search, $options:'i'},
                                      // queryObject.desc= {$regex:search, $options:'i'}}
  if (wifi) queryObject.wifi= true
  if (shower)queryObject.shower= true
  if (food)queryObject.food= true
  try {
    await connectDB()
    const result = await Room.find(queryObject)
    const totalPage = Math.ceil(result.length / 10)
    const startInd = (page - 1) * 10
    const endInd = page * 10
    const roomsList = result.slice(startInd, endInd)
    const res = { data: roomsList, totalPage: totalPage }
    return NextResponse.json(res, {
      status: 200,
    })
  } catch (error) {
    return new Response(error, { status: 500 })
  }
}
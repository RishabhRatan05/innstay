import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "@/lib/models/user"
import connectDB from "@/lib/utils/conn"
import { NextResponse } from "next/server"

export const genToken = async ( email ) => {
  const token = await jwt.sign(email, process.env.JSON_SECRET)

  return token
}

export async function POST (request, res) {
  const { name, email, password } = await request.json()

  try {
    await connectDB()
    
    if (!name || !email || !password)
      throw new Error({ msg: "enter all fields" })

    // const userExist = await User.find({ email:email })
    // if (userExist==[]) throw new Error({ msg: "User already exists" })

    const hashedPass = await bcrypt.hash(password,await bcrypt.genSalt(10))
    const user = await  User.create({ name, email, password: hashedPass })
    const token = await genToken(email)

    return new Response(JSON.stringify(token), {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error(error)
  }
}

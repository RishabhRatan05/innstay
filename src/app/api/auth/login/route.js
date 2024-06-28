import bcrypt from "bcrypt"
import User from "@/lib/models/user"
import connectDB from "@/lib/utils/conn"
import { genToken } from "../signUp/route"

export const POST = async (req, res) => {
  const { email, password } = await req.json()
  try {
    await connectDB()
    if (!email || !password) return new Response({ msg: "enter all fields" })
    const user = await User.find({ email:email })

    if (user==[]){ return new Response({ msg: "Invalid credentials" })
    }else if(user!=[]){

    const hashPass = await user[0].password
    const isValidUser = await bcrypt.compare(password, hashPass)

    if (!isValidUser) return new Response({ msg: "Invalid credentials" })
    const { name } = user[0]

    const token = await genToken( email)

    return new Response(JSON.stringify(token),{
        headers:{
            'Content-Type':'appication/json'
        }
    })
}
  } catch (error) {
    console.error(error)
  }
}

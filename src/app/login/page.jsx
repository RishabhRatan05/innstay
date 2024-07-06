'use client'
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'

const Login = () => {
  const [user,setUser] = useState()
  const handleChange =(e)=>{
    setUser((prev)=>({...prev,
    [e.target.name]:e.target.value
    }))
  }
  const router = useRouter()
  const handleSubmit= async(e)=>{
    e.preventDefault()  
    const data = await fetch('api/auth/login',{
      method:"POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      body:JSON.stringify({
        email:user.email,
        password:user.password
      })
    })
    if(data.status===500){alert('Invalid credentials')}
    else{
    const res = await data.json()
    if(typeof window!=='undefined')
      localStorage.setItem('token',res)
    router.replace('/')
    }
  }
  return (
    <div className='flex justify-center w-full h-screen items-center bg-gradient-to-tr from bg-kalar-100'>

    <form className='flex flex-col gap-2 bg-white p-2' onSubmit={handleSubmit}>
      <label className='text-4xl'>email</label>
      <input className='text-2xl' onChange={handleChange} name='email' placeholder='email'></input>
      <label className='text-4xl'>password</label>
      <input className='text-2xl' onChange={handleChange} name='password' placeholder='password'></input>
      <button className='bg-black text-white text-2xl rounded-sm'>Submit</button>
    </form>
    </div>
  )
}

export default Login
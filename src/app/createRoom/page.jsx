'use client'
import Navbar from '@/components/Navbar'
import RoomCardAdmin from '@/components/RoomCardAdmin'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const Page = () => {
  const [token,setToken] = useState()
  const [rooms,setRooms] = useState()
  const getAllPosts=async()=>{
    if(token){
      console.log('fetching')
    const res = await fetch('api/room',{
      method:"GET",
      headers:{
        'Authorization':token
      }
    })
    const data = await  res.json()
    setRooms(data)
    }
  }
  useEffect(()=>{
    getAllPosts()
  },[token])
  useEffect(()=>{
    if(typeof(window)!='undefined'){
      setToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <div>      
      <Navbar/>
<main className='sm:grid grid-cols-7 gap-2'>
      <aside className=' col-span-1 sm:flex sm:flex-col justify-between sm:h-screen sm:justify-start flex-wrap sm:p-2 sm:h-full flex bg-kalar-700 gap-1 text-2xl w-full'>
        Profile
        email
        <Link href={'/createRoom/'}>All rooms</Link>
        <Link href={'/createRoom/new'}>New</Link>
      </aside>

      <div className='col-span-5'>
        <h1 className='text-6xl'>All rooms</h1>
      {rooms && rooms?.map(room=>{
        return(
          <RoomCardAdmin key={room._id} room={room}/>
        )
        })}
      </div>
      </main>
    </div>
  )
}

export default Page
'use client'
import Navbar from '@/components/Navbar'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Room = () => {
  const params = useParams()
  const [room,setRoom] = useState()
  const [data,setData] = useState()
  const [owner,setOwner] = useState()
  const [id,setId] = useState(params._id)
  const getRoom=async()=>{
      try {
        const res = await fetch(`/api/room/${id}`,{
            method:"GET"
        })
        const d = await res.json()
        setData(d.room)
        setOwner(d.owner)
        
      } catch (error) {
        console.error(error)
      }
  }

  useEffect(()=>{
     getRoom()
  },[])
  useEffect(()=>{
    setRoom(data)
  },[data])

  return (
    <div>
        <Navbar/>
        {room &&
        <main className='mx-20'>

        <Image src={room.url} width={1000} height={1000} alt='room' className='w-full h-80 '/>
        <div className='sm:mt-4 mt-2 sm:text-8xl text-6xl'>{room.title}</div>
        <div className='text-4xl'>Price: {room.price}</div>
        <div className='text-2xl'>{room.desc}</div>
        <div className='text-2xl'>Owner name Mr/Mrs {owner.name}</div>
        <div className='text-2xl'>Email {owner.email}</div>
        </main>
        }
      
    </div>
  )
}

export default Room
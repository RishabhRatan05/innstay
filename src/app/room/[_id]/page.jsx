'use client'
import Navbar from '@/components/Navbar'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getRoom } from './server'
import Image from 'next/image'

const Room = () => {
  const params = useParams()
  const [room,setRoom] = useState()
  const [data,setData] = useState()
  const [id,setId] = useState(params._id)


  useEffect(()=>{
    const get =async()=>{
     const d= getRoom(id)
      setData(d)
    }
    get()
  },[])
  useEffect(()=>{
    setRoom(data)
    console.log(data)

  },[data])

  return (
    <div>
        <Navbar/>
        {room &&
        <main>

        <img src={room.url} width={40} height={40} alt='room'/>
        <h1 value={room.title}>{room.title}</h1>
        </main>
        }
      
    </div>
  )
}

export default Room
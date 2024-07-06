'use client'
import Navbar from '@/components/Navbar'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faShower, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'

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
        <main className='sm:mx-20 mx-2 flex flex-col gap-2'>

        <Image src={room.url?room.url:'/room.jpeg'} width={1000} height={1000} alt='room' className='w-full h-80 '/>
        <div className='sm:mt-4 mt-2 sm:text-8xl text-6xl'>{room.title}</div>
        <div className='text-4xl'>Price: ₹{room.price}</div>
        <div className='text-2xl'>Location: <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> {room.location}</div>
        <div className='text-2xl'>Description: {room.desc}</div>
        <div className='flex sm:gap-4 gap-2 text-2xl'>
        <div>Facilities</div>
        <div>{room.food && <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>}</div>
        <div>{room.shower && <FontAwesomeIcon icon={faShower}></FontAwesomeIcon>}</div>
        <div>{room.wifi && <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>}</div>
        </div>
        <div className='text-2xl'>Owner Mr/Mrs {owner.name}</div>
        <div className='text-2xl'>Owner's Email {owner.email}</div>
        </main>
        }
      
    </div>
  )
}

export default Room
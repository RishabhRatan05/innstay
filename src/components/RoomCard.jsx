'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const RoomCard = ({room}) => {
  const {title, desc, food, wifi, shower, location,price, url,_id} = room
  const router = useRouter()
  const handleRoom=()=>{
    console.log('id',_id)
    router.push(`room/${_id}`)
  }
  return (
    <div onClick={handleRoom} className='sm:grid sm:grid-cols-3 flex flex-col w-full  items-center border-kalar-500 border-2 mt-2 bg-sky-400 sm:text-xl text-white hover:cursor-pointer'>
        <div>
          <Image src={url?url:'/room.jpeg'} alt="room" width={100} height={40} className='w-full h-full p-2'></Image>
        </div>
        <div className='flex flex-col items-start pl-2 gap-2'>
        <div className='flex gap-5 items-center'>
        <div className='text-4xl'>{title}</div>
        <div className='text-green-900'> Price ₹<span className='text-black'>{price}</span>
        </div>
        </div>
        <div className=''>{location}</div>
        <div>{desc}
        </div>
        <div className='flex gap-2'>
        <div>Facilities</div>
        <div>{food && <div>Food</div>}</div>
        <div>{shower && <div>Shower</div>}</div>
        <div>{wifi && <div>Wifi</div>}</div>
        </div>
        </div>
    </div>
  )
}

export default RoomCard
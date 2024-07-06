'use client'
import { faLocationDot, faShower, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const RoomCard = ({room}) => {
  const {title, desc, food, wifi, shower, location,price, url,_id} = room
  const router = useRouter()
  const handleRoom=()=>{
    router.push(`/room/${_id}`)
  }
  return (
    <div onClick={handleRoom} className='sm:grid sm:grid-cols-3 flex flex-col w-full  items-center border-kalar-500 border-2 mt-2 bg-kalar-200 sm:text-xl text-white hover:cursor-pointer'>
        <div>
          <Image src={url?url:'/room.jpeg'} alt="room" width={100} height={40} className='w-full h-full p-2'></Image>
        </div>
        <div className='flex flex-col items-start pl-2 gap-2'>
        <div className='flex gap-5 items-center'>
        <div className='text-4xl'>{title}</div>
        <div className='text-green-900'> Price ₹<span className='text-kalar-800'>{(price)}</span>
        </div>
        </div>
        <div className=''><span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> {location}</div>
        <div>{desc}
        </div>
        <div className='flex sm:gap-4 gap-2'>
        <div>Facilities</div>
        <div>{food && <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>}</div>
        <div>{shower && <FontAwesomeIcon icon={faShower}></FontAwesomeIcon>}</div>
        <div>{wifi && <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>}</div>
        </div>
        </div>
    </div>
  )
}

export default RoomCard
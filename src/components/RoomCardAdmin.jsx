'use client'
import {valueChange} from '@/redux/slices/updateRoom'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

const RoomCardAdmin = ({room}) => {
  const {title, desc, food, wifi, shower, location,price, url,_id} = room
  const dispatch  = useDispatch()
  const router = useRouter()
  const handleEdit=async(e)=>{
    e.preventDefault()
    const editRoom ={
        title:title, desc:desc, food:food, wifi:wifi, shower:shower, location:location,price:price, url:url,_id:_id
    }
    dispatch(valueChange(editRoom))
    return router.push('/createRoom/edit')
  }
  const handleDelete=async(e)=>{
    e.preventDefault()
    const res =await fetch('api/room',{
      method:"DELETE",
      body:JSON.stringify(_id)
    })
    return
  }
  return (
    <div className='sm:grid grid-cols-8 pr-2 flex flex-col w-full  items-center border-kalar-500 border-2 mt-2 bg-sky-400 sm:text-xl text-white'>
        <div className='w-full h-full p-2 col-span-2'>
          <Image src={url?url:'/room.jpeg'} alt="room" width={100} height={40} className='w-full h-40'></Image>
        </div>
        <div className='flex flex-col items-start pl-2 gap-2 col-span-5'>
        <div className='flex gap-5 items-center'>
        <div className='text-4xl'>{title}</div>
        <div className='text-green-900'> Price ₹<span className='text-black'>{price}</span>
        </div>
        </div>
        <div className=''>{location}</div>
        <div>{desc}
        </div>
        <div>Facilities</div>

        </div>
        <div className='col-span-1 flex flex-col justify-between gap-4 '>
            <button className='bg-black' onClick={handleEdit}>Edit</button>
            <button className='bg-black'onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default RoomCardAdmin
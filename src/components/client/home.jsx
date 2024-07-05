'use client'
import { useEffect, useState } from "react";
import RoomCard from "@/components/RoomCard";
import { CardCaraousel } from "@/components/RoomCarousel";


export const PopularRooms =()=>{
    
    const [rooms,setRooms] = useState()

    useEffect(()=>{
        getRooms()
    },[])
    const getRooms=async()=>{
        const res = await fetch('api/latestRooms',{
            method:"GET"
        })
        // console.log('res',await res.json())
        const data = await res.json()
        setRooms(data)
    }

    return(
      <main className="sm:px-10 h-full text-center bg-kalar-100">
        <div className="sm:grid grid-cols-3 mb-3 items-center">
          <div className="sm:text-6xl col-span-1 text-4xl text-kalar-800">
            Popular
          </div>
          <div className=" col-span-2 ">
            <CardCaraousel
              chidren={rooms && rooms?.map(room=>{
                  return(
                    <RoomCard key={room._id} room={room}/>
                  )})}
            />
          </div>
        </div>
        <div className="sm:flex sm:flex-row-reverse justify-between  items-center">
          <div className="sm:text-6xl col-span-1 text-4xl text-kalar-800">Latest</div>
          <div>
            <CardCaraousel
              chidren={
                <div className="flex col-span-2 justify-between" >{rooms && rooms?.map(room=>{
                  return(
                    <RoomCard key={room._id} room={room}/>
                  )
                })}
                </div>
              }
            />
          </div>
        </div>
      </main>
    )
}

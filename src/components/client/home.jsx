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
        const res = await fetch('api/popularRooms',{
            method:"GET"
        })
        // console.log('res',await res.json())
        const data = await res.json()
        setRooms(data)
    }

    return(
        <CardCaraousel
            chidren={rooms && rooms?.map(room=>{
                return(
                        <RoomCard key={room._id} room={room}/>
                    )}
                )
            }
        />
    )
}

export const LatestRooms=()=>{
    const [rooms,setRooms] = useState()

    useEffect(()=>{
        getRooms()
    },[])
    const getRooms=async()=>{
        const res = await fetch('api/popularRooms',{
            method:"GET"
        })
        // console.log('res',await res.json())
        const data = await res.json()
        setRooms(data)
    }
    return(
            <CardCaraousel
              chidren={rooms && rooms?.map(room=>{
                  return(
                    <RoomCard key={room._id} room={room}/>
                  )
                })}
            />
    )
}
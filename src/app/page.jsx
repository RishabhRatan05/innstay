'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import RoomCarousel from "@/components/RoomCarousel";
import { CardCaraousel } from "@/components/RoomCarousel";
import { useEffect, useState } from "react";
export default function Home() {

  const [rooms,setRooms] = useState()

  const getRooms=async()=>{
      const res = await fetch('api/latestRooms',{
        method:"GET"
      })
      // console.log('res',await res.json())
      const data = await res.json()
      setRooms(data)
  }


  useEffect(()=>{
    getRooms()
  },[])
  return (
    <div>
      <Navbar />
      {/* <RoomCarousel /> */}
      <div className="md:flex  flex flex-col justify-center items-center md:mr-10">
      {/* <img src="room.jpeg" className="h-80  w-full"></img> */}
      <div className="md:text-8xl text-6xl ">Find your stay with InnStay</div>
      </div>
        

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
      <Footer />
    </div>
  )
}

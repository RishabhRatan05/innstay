import Image from 'next/image'
import React from 'react'

const RoomCard = () => {
  return (
    <div className='grid grid-cols-3  items-center border-kalar-500 border-2 m-2 bg-kalar-700 sm:text-xl text-white'>
        <div>
          <Image src='/room.jpeg' alt="room"></Image>
        </div>
        <div className='flex flex-col items-start pl-2'>
        <div>Title</div>
        <div> Price</div>
        <div>ksfjskojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          kjlkkkkkkkkkkkkkkkkkkkkkkl
          jklllllllllllllllllllllllllllllllllllllllllllllllj
          kjlllllllllllllllllllllllllllllllllllllllllllllllllllll
        </div>
        </div>
    </div>
  )
}

export default RoomCard
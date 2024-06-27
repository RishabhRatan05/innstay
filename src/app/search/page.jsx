import Navbar from '@/components/Navbar'
import RoomCard from '@/components/RoomCard'
import React from 'react'

const Search = () => {
  return (
    <div>
      <Navbar/>
     <main className='sm:flex'>
      <aside className=' sm:flex sm:flex-col justify-between sm:h-screen sm:justify-start flex-wrap sm:p-2 sm:h-full flex bg-kalar-700 gap-1 sm:w-fit w-full'>
        <p>Filters</p>
        <p>Price</p>
        <input type='range'></input>
        <p>Facilities</p>
        <label>Wifi
        <input type='checkbox'></input>
        </label>       
         <label>Food
        <input type='checkbox'></input>
        </label>       
         <label>Shower
        <input type='checkbox'></input>
        </label>

     </aside>

      <div className=''>
      <h1 className='text-kalar-800 text-4xl px-2'>Results</h1>
      <div>
        {/* <RoomCard/> */}
        {/* <RoomCard/> */}
      </div>
      </div>

     </main>
      
    </div>
  )
}

export default Search
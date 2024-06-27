'use client'
import Navbar from '@/components/Navbar'
import RoomCard from '@/components/RoomCard'
import Link from 'next/link'
const Page = () => {
  return (
    <div>      
      <Navbar/>
<main className='sm:flex gap-2'>

      <aside className='flex flex-col gap-2 p-2 sm:h-screen bg-kalar-700 '>
        Profile
        email
        <Link href={'/createRoom/'}>All rooms</Link>
        <Link href={'/createRoom/new'}>New</Link>
      </aside>
      <div>
        <h1 className='text-6xl'>All rooms</h1>
        {/* <RoomCard/> */}
      </div>
      </main>
    </div>
  )
}

export default Page
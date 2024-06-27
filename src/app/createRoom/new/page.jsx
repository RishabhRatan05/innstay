'use client'
import Navbar from '@/components/Navbar'
import { UploadButton } from '@/utils/uploadthing'
import Link from 'next/link'
import { useState } from 'react'
const Page = () => {
  const [room,setRoom] = useState()

  const handleChange=(e)=>{
    setRoom((prev)=>({...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

    console.log('room',room)
  }
  return (
    <div>      
      <Navbar/>
<main className='sm:flex'>

      <aside className='flex flex-col gap-2 p-2 sm:h-screen bg-kalar-700'>
        Profile
        email
        <Link href={'/createRoom/'}>All rooms</Link>
        <Link href={'/createRoom/new'}>New</Link>
      </aside>
      <div className='m-2 sm:flex justify-between items-center'>

      <h1 className='text-6xl mb-2'>
        Create You own Room
      </h1> 
      <form className='flex flex-col bg-kalar-600 p-3 w-full h-fit ' onSubmit={handleSubmit}> 
        <label>Image 1</label>
        <input type='file'></input>
        <label>Image 2</label>
        <input type='file'></input>
              <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

        <label>Image 4</label>
        <input type='file'></input>
        <label > Title</label>
        <input name='title' onChange={handleChange}></input>
        <label>Desc</label>
        <textarea name='desc' onChange={handleChange}></textarea>
        <label>Facilities</label>
        <div className='flex justify-between'>

        <label>Wifi
        <input type='checkbox' name='wifi' onChange={handleChange}></input>
        </label>        
        <label>Food
        <input type='checkbox' name='food' onChange={handleChange}></input>
        </label>        
        <label>Shower
        <input type='checkbox' name='shower' onChange={handleChange}></input>
        </label>
        </div>
        <button className='bg-kalar-800 text-white'>Create</button>
      </form>
      </div>
      
      </main>
    </div>
  )
}

export default Page
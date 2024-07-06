'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import {  useEffect, useState } from 'react'
import axios from 'axios'
import { useEdgeStore } from '@/lib/edgestore';
import { SingleImageDropzone } from '@/components/Image-Input';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';


const Page = () => {
  const editRoom = useSelector(state=>state.editRoom)
  const [fetch,setFetch] =useState(false)
  const [progress,setProgress] = useState()
  const {_id} = editRoom
  const [file,setFile] =useState()
  const [room,setRoom] =useState({
    title: editRoom.title,
    desc:editRoom.desc,
    food:editRoom.food,
    wifi:editRoom.wifi,
    shower:editRoom.shower,
    location:editRoom.location,
    price:editRoom.price,
    url:editRoom.url
  })
  const { edgestore } = useEdgeStore();
  const router = useRouter()


  const handleChange=(e)=>{
        setRoom((prev)=>({...prev,
        [e.target.name]:e.target.value
        }))
  }

  const handleImageUpload=async(e)=>{
    e.preventDefault()
      if (file) {
    const res = await  edgestore.publicFiles.upload({
      file,
      onProgressChange: (progress) => {
        setProgress(progress)
      },
    });
    const urlgot = await res.url
    await setRoom(prev=>({...prev,url:urlgot}))
      }
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    try {  
      const res = await axios({
        method:'put',
        url:'/api/room',
        headers:{
         'Content-Type':"application/json",
          'Id':_id
        },
        data:JSON.stringify(room)
      })
      
    if(res.status==201) router.push('/createRoom')
    } catch (error) {
      console.log(error)
    }

}
  return (
    <div>      
      <Navbar/>
<main className='sm:grid grid-cols-7 gap-2'>

      <aside className=' col-span-1 sm:flex sm:flex-col justify-between sm:h-screen sm:justify-start flex-wrap sm:p-2 sm:h-full flex bg-kalar-700 gap-1 text-2xl w-full'>
        Profile
        email
        <Link href={'/createRoom/'}>All rooms</Link>
        <Link href={'/createRoom/new'}>New</Link>
      </aside>
      <div className='m-2 sm:flex justify-between items-center col-span-5'>

      <h1 className='text-6xl mb-2'>
        Create You own Room
      </h1> 
      <form className='flex flex-col bg-kalar-800 p-3 w-full h-fit text-kalar-100' onSubmit={handleSubmit}> 
        <label > Title</label>
        <input name='title' value={room.title} onChange={handleChange} required={true} className='text-black text-2xl'></input>
        <label > Price</label>
        <input name='price' value={room.price}  type='number' onChange={handleChange} required={true} className='text-black text-2xl'></input>
        <label > Location</label>
        <input name='location' value={room.location}  onChange={handleChange} required={true} className='text-black text-2xl'></input>
        <label>Desc</label>
        <textarea name='desc' value={room.desc}  onChange={handleChange} required={true} className='text-black text-2xl'></textarea>
        <div className='sm:flex justify-between items-center'>

        <label>Image</label>
      <SingleImageDropzone
        width={5}
        height={5}
        value={file}
        dropzoneOptions={{
          maxSize:1024*1024*4
        }}
        onChange={(file) => {
          setFile(file);
        }}  
      />      
      <div>
        <div className='h-[6px] w-29 rounded overflow-hidden border'>
          <div className='bg-white h-full transition-all duration-150' style={{width:`${progress}%`}}></div>
        </div>
      <button className='text-kalar-800 bg-white rounded mt-2 w-fit h-full px-1' onClick={handleImageUpload}>
        {progress==100?<div>Uploaded</div>:<div>Upload</div>}
      </button>
      </div>
        </div>
        <label>Facilities</label>
        <div className='flex justify-between'>

        <label>Wifi
        <input type='checkbox' name='wifi'  onChange={handleChange}></input>
        </label>        
        <label>Food
        <input type='checkbox' name='food' value={room.food} onChange={handleChange}></input>
        </label>        
        <label>Shower
        <input type='checkbox' name='shower' value={room.shower} onChange={handleChange}></input>
        </label>
        </div>
        <button className='bg-kalar-800 text-white' type='submit'>Update</button>
      </form>
      </div>
      </main>
    </div>
  )
}

export default Page
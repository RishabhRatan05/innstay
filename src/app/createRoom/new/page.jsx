'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useEdgeStore } from '@/lib/edgestore';
import { SingleImageDropzone } from '@/components/Image-Input';
import { useRouter } from 'next/navigation';




const Page = () => {
  const [file,setFile] =useState()
  const [room,setRoom] =useState()
  const [progress,setProgress] =useState()
  const [token,setToken] = useState()
  const { edgestore } = useEdgeStore();
  const router = useRouter()

  useEffect(()=>{
    if(typeof window!=='undefined')
      setToken(localStorage.getItem('token'))
  },[])


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

      const res = await fetch('/api/room',{
        method:"POST",
        headers:{
          'Content-Type':"application/json",
          'Authorization':token
        },
        body:JSON.stringify(room)
      })
    if(res.status==201) router.push('/createRoom')
    else{
      return

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

      {token?
      <div className='m-2 sm:flex justify-between items-center col-span-5'>

      <h1 className='text-6xl mb-2'>
        Create You own Room
      </h1> 
      <form className='flex flex-col bg-kalar-800 p-3 w-full h-fit text-kalar-100' onSubmit={handleSubmit}> 
        <label > Title</label>
        <input name='title' onChange={handleChange} required={true} className='text-black text-2xl'></input>
        <label > Price</label>
        <input name='price' type='number' onChange={handleChange} required={true} className='text-black text-2xl'></input>
        <label > Location</label>
        <input name='location' onChange={handleChange} required={true} className='text-black text-2xl'></input>
        <label>Desc</label>
        <textarea name='desc' onChange={handleChange} required={true} className='text-black text-2xl'></textarea>
        <div className='sm:flex justify-between items-center'>

        <label>Image</label>
      <SingleImageDropzone
        width={200}
        height={200}
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
        <input type='checkbox' name='wifi' onChange={handleChange}></input>
        </label>        
        <label>Food
        <input type='checkbox' name='food' onChange={handleChange}></input>
        </label>        
        <label>Shower
        <input type='checkbox' name='shower' onChange={handleChange}></input>
        </label>
        </div>
        <button className='bg-kalar-800 text-white' type='submit'>Create</button>
      </form>
      </div>
      :
      <div className='text-4xl'>Login First to create new Room</div>
      }
      
      </main>
    </div>
  )
}

export default Page
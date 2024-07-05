'use client'
import Navbar from '@/components/Navbar'
import RoomCard from '@/components/RoomCard'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
  const [rooms,setRooms] = useState()
  const [page,setPage] = useState()
  const [filters,setFilters] = useState({
    price:100000,
  })
  const [wifi,setWifi] = useState(true)
  const [shower,setShower] = useState(true)
  const [food,setFood] = useState(true)
  const [isFilter,setIsFilter] = useState(false)
  const [price,setPrice] = useState()
  const search = useSelector(state=>state.search).value
  console.log('search',search)
  useEffect(()=>{
    const a = Number(filters.price)
    setPrice(a.toLocaleString())
  },[filters.price])
  useEffect(()=>{
    setFilters((prev)=>({...prev,search:search}))
    if(typeof(page)!='undefined'){
      getFilteredRooms()
    }
  },[search])
  const [totalPage,setTotalPage] = useState()
  const params = useParams()
  const router = useRouter()

  const handleChange=(e)=>{
    console.log(e.target.value,e.target.name)
    if(e.target.name=='price'){
      setFilters((prev)=>({...prev,
        [e.target.name]:e.target.value
      }))
    }
    else if(e.target.name == 'wifi'){
      setFilters((prev)=>({...prev,
        [e.target.name]:wifi
      }))
    }
    else if(e.target.name == 'shower'){
      setFilters((prev)=>({...prev,
        [e.target.name]:shower
      }))
    }
    else if(e.target.name == 'food'){
      setFilters((prev)=>({...prev,
        [e.target.name]:food
      }))
    }
  }

  const getFilteredRooms=async()=>{

    const res = await fetch(`/api/allRoom/${page}`,{
      method:"POST",
      body:JSON.stringify(filters)
    })
    const result = await res.json()
    const data = await result.data
    const pageLength = await result.totalPage
    setTotalPage(pageLength)
    setRooms(data)
  }
  const handleFilter=async()=>{
      setIsFilter(true)
      getFilteredRooms()

  }

  const handlePageChange=async(e)=>{
    const newPage  = e.target.value
    await setPage(newPage)
    router.push(`/search/${newPage}`)
  }

  const pageNo = 2
  useEffect(()=>{
    const newPage = pageNo
    setPage(newPage)
    console.log(page)
  },[pageNo])

  const getAllRooms=async()=>{
    const res = await fetch(`/api/allRoom/${page}`,{
      method:"GET"
    })
    const result = await res.json()
    const data = await result.data
    const pageLength = await result.totalPage
    console.log('pa',pageLength)
    setTotalPage(pageLength)
    setRooms(data)
  }

  useEffect(()=>{
  setPage(params.page)
    if(typeof(page)!='undefined'){
      if(search){
        setFilters((prev)=>({...prev,search:search})) 
      }
      getAllRooms()
    }
  },[])
  useEffect(()=>{
        if(typeof(page)!='undefined'){
      if(isFilter){
        getFilteredRooms()
      }else{
        getAllRooms()
      }
    }
  },[page])
  return (
    <div>
      <Navbar/>
     <main className='sm:grid grid-cols-7 bg-slate-400'>
      <aside className=' col-span-1 sm:flex sm:flex-col justify-between sm:h-screen sm:justify-start flex-wrap sm:p-2 sm:h-full flex bg-kalar-700 gap-1 sm:w-fit w-full'>
        <p>Filters</p>
        <p>Price</p>
        <p className='items-end '>Max:{price && price}</p>
        <input type='range' name='price' min={0} max={100000} onChange={handleChange}></input>
        <p>Facilities</p>
        <label>Wifi
        <input type='checkbox' name='wifi' onClick={e=>setWifi(!wifi)}  onChange={handleChange} value={wifi}></input>
        </label>       
         <label>Food
        <input type='checkbox' name='food' onClick={e=>setFood(!food)} onChange={handleChange} value={food}></input>
        </label>       
         <label>Shower
        <input type='checkbox' name='shower' onClick={e=>setShower(!shower)} onChange={handleChange}value={shower}></input>
        </label>

        <button className='bg-black text-white cursor-pointer' onClick={handleFilter}>Filter</button>

     </aside>

    <div className='col-span-5'>


      <div className=''>
      <h1 className='text-kalar-800 text-6xl '>Results</h1>
      <div>
        {rooms && rooms? rooms?.map((room)=>{
          return(
            <RoomCard key={room._id} room={room}/>
          )
        })
        :
        <>Loading...</>
        }
      </div>
      </div>

      {/* Pagination */}
      <div className='flex gap-2 bg-slate-500 text-white text-xl justify-center'>
        {page>=2 && 
          <button onClick={handlePageChange} value={page-1} className=' hover:text-gray-800 hover:cursor-pointer'>{page-1}</button>
        }


        <button onClick={handlePageChange} value={page} className=' hover:text-gray-800 hover:cursor-pointer'>{page}</button>
        
        {page<totalPage && 
        <>
        <button onClick={handlePageChange} value={Number(page)+1} className=' hover:text-gray-800 hover:cursor-pointer'>{Number(page)+1}</button>
          </>
        }
        {/* <div onClick={()=>setPage(3)} className=' hover:text-gray-800 hover:cursor-pointer'>4</div>
        <div onClick={()=>setPage(3)} className=' hover:text-gray-800 hover:cursor-pointer'>5</div>
        <div onClick={()=>setPage(3)} className=' hover:text-gray-800 hover:cursor-pointer'>6</div> */}
      </div>
    </div>
    
    </main>
      
    </div>
  )
}

export default Search
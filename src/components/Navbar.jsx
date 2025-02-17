'use client'
import { searchChange } from '@/redux/slices/search'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const [token, setToken] = useState()
    const router = useRouter()
    useEffect(()=>{
    if(typeof window!=='undefined')
        setToken(localStorage.getItem('token'))
    },[])
    const isAdmin = true
    const isUser = token?true:false
    const [isOpen , setIsOpen] = useState(false)
    const [isOpen2 , setIsOpen2] = useState(false)
    const [search ,setSearch] = useState('')
    const dispatch = useDispatch()

    const handleSearch=async(e)=>{
        e.preventDefault()
        dispatch(searchChange({value:search}))
        return router.push('/search/1')
    }

    const handleLogout=()=>{
    if(typeof window!=='undefined')
        localStorage.removeItem('token')
    }
  return (
    <>
    {/* //Desktop */}
    <div className='bg-kalar-800 text-white h-10 sm:flex hidden justify-between items-center px-4'>
        <Link href={'/'}>InnStay</Link>
        <Link href={'/'}>Home</Link>
        <form>
            <input className='bg-kalar-500 rounded-l-lg text-black' value={search} name='search' onChange={e=>setSearch(e.target.value)}>
            </input>
            <button className='bg-kalar-500 rounded-r-lg px-1 text-black' onClick={handleSearch}>search </button>
        </form>
        {isAdmin && <Link href={'/createRoom'}>Create Room</Link>}
        {isUser? <Link href={'/'} onClick={handleLogout}> Logout</Link>:
        <button onClick={()=>setIsOpen2(!isOpen2)}>Menu</button>
        }
    </div>
    {isOpen2 && <div className='hidden sm:flex flex-col bg-kalar-700 gap-2 px-4 text-white absolute z-20 right-0 p-2'>
        <Link href={'/login'}>Login</Link>
        <Link href={'/signUp'}>SignUp</Link>
        </div>}





    {/* //Mobile */}
    <div className='bg-kalar-800 text-white h-10 sm:hidden flex justify-between  items-center px-4'>
        <Link href={'/'}>InnStay</Link>
        <button onClick={()=>setIsOpen(!isOpen)}>Menu</button>
    </div>
            {isOpen && <div className='sm:hidden  flex flex-col absolute z-20 w-full bg-kalar-700 gap-2 px-4 text-white'>
        <form className='pt-2'>
            <input className='bg-kalar-500 rounded-l-lg focus:border-blue-500'>
            </input>
            <button className='bg-kalar-500 rounded-r-lg px-1 text-black' onClick={handleSearch}>search</button>
        </form>
        <Link href={'/'}>Home</Link>    
        {isAdmin && <Link href={'/createRoom'}>Create Room</Link>}
        {isUser?  <Link href={'/profile'}>Profile</Link>:
        <></>
        }
        {isUser? <Link href={'/'} onClick={handleLogout}>Logout</Link>:
        <Link href={'/login'}>Login</Link>
        }
        {isUser? <></>:
        <Link href={'/signUp'}>SignUp</Link>
        }
        </div>
            }
    </>
  )
}

export default Navbar
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const isAdmin = true
    const isUser =false
    const [isOpen , setIsOpen] = useState(false)
    const [isOpen2 , setIsOpen2] = useState(false)
  return (
    <>
    {/* //Desktop */}
    <div className='bg-kalar-800 text-white h-10 sm:flex hidden justify-between items-center px-4'>
        <Link href={'/'}>InnStay</Link>
        <Link href={'/'}>Home</Link>
        <form>
            <input className='bg-kalar-500 rounded-l-lg text-black'>
            </input>
            <button className='bg-kalar-500 rounded-r-lg px-1 text-black'>search </button>
        </form>
        {isAdmin && <Link href={'/createRoom'}>Create Room</Link>}
        {isUser? <Link href={'/'}> Logout</Link>:
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
            <button className='bg-kalar-500 rounded-r-lg px-1 text-black'>search</button>
        </form>
        <Link href={'/'}>Home</Link>    
        {isAdmin && <Link href={'/createRoom'}>Create Room</Link>}
        {isUser?  <Link href={'/profile'}>Profile</Link>:
        <></>
        }
        {isUser? <Link href={'/'}>Logout</Link>:
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
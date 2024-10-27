'use client'
import React from 'react'
import Logo from '@/app/Assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex w-screen  justify-center border-b-[2px]'>
      <div className="logo  p-4 w-[200px]">
        <img src="https://res.cloudinary.com/djyxyaqno/image/upload/v1730026025/WB-logo_npgjyw.png" alt="logo" />
      </div>
      <div className="profile  p-4 w-full text-right">
        profile
      </div>
    </div>
  )
}

export default Navbar

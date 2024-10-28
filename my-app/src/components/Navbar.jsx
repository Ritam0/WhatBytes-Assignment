'use client'
import React from 'react'
import Logo from '@/app/Assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex w-screen  justify-center border-b-[2px]'>
      <div className="logo  p-4 w-[200px]">
        <img src="https://res.cloudinary.com/djyxyaqno/image/upload/v1730026025/WB-logo_npgjyw.png" alt="logo" />
      </div>
      <div className="profile  p-4 w-full text-right m-auto mr-4 border rounded-[5px] w-56 font-bold text-[20px]">
      🤦 Ritam Majumder
      </div>
    </div>
  )
}

export default Navbar

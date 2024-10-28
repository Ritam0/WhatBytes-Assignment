"use client"
import React from 'react'

const Sidenav = () => {
  return (
    <div className='flex lg:flex-col border gap-6 pt-8 lg:h-screen p-2 font-semibold text-[20px]'>
      <div className="skill p-2">📈 Dashboard</div>
      <div className="skill p-2 lg:p-4 border text-[#1100ff] bg-[#8b8c9014] rounded-[10px] lg:rounded-r-[25px]">🎖Skill Test</div>
      <div className="skill p-2">📝 Internships</div>
    </div>
  )
}

export default Sidenav

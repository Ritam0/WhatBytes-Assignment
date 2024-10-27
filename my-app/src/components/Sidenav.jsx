import React from 'react'

const Sidenav = () => {
  return (
    <div className='flex flex-col border gap-6 pt-8 h-screen p-2 font-semibold text-[20px]'>
      <div className="skill p-2">📈 Dashboard</div>
      <div className="skill p-4 border text-[#1100ff] bg-[#8b8c9014] rounded-r-[25px]">🎖 Skill Test</div>
      <div className="skill p-2">📝 Internships</div>
    </div>
  )
}

export default Sidenav

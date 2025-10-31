import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
  return (
    <div className='flex items-center justify-center gap-3 lg:text-[5vw] text-[9vw]  lg:leading-[6vw] leading-[11vw] uppercase font-[font2] mb-2 lg:mb-0'>
      <Link to="/projects" className='border-3 border-white rounded-full lg:px-6 px-2  hover:text-[#D3FD50]
      hover:border-[#D3FD50]'>Projects</Link>
      <Link to="/agence" className='border-white border-3 rounded-full lg:px-6 px-2 hover:text-[#D3FD50] hover:border-[#D3FD50]'>Agents</Link>
    </div>
  )
}

export default BottomText

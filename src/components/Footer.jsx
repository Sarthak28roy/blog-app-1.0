import React from 'react'
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <main className='w-full h-20 md:h-24 relative bottom-0 bg-[#202125]  flex flex-col md:flex-row border-t-2 border-solid
    border-white items-center justify-center gpa-2 md:justify-around text-white'>
        <p>© All Rights Reserved</p>
        <div className='flex gap-2 items-center'>
            <span>Made with</span>
            <span><FaHeart className='w-4 h-4'/></span>
            <span>by Sarthak Roy</span>
        </div>

    </main>
  )
}

export default Footer
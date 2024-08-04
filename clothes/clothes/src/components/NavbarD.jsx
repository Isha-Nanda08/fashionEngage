import React from 'react'
import {Link} from "react-router-dom"

function NavbarD() {
  return (
    <div className=' bg-black text-[#EAE7E4] w-full mx-auto h-20 border-b'>
      <div className=' w-full h-full flex items-center justify-between md:px-8 px-3'>
        <div className='font-play tracking-widest'><span>Shreya</span></div>
        <div className='flex md:gap-5 font-pop md:text-sm tracking-wide whitespace-nowrap text-xs gap-3'>
        <a href='#Home'>About</a>
        <a href='#Past'>Past Events</a>
        <a href='#Upcoming'>Upcoming Events</a>
      </div>
    </div>
    </div>
   
  )
}

export default NavbarD
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Participate() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/post")
  }
  return (
    <div className='bg-[#E0DCD9] flex flex-col justify-center items-center gap-5 p-10'>
      <div className='font-BN font-bold text-3xl md:text-5xl'>Participate Now!</div>

      <div className='md:text-xl'><span>Participate in the compeition and Win Exclusive Offers.</span></div>
      <div>
      <button className='border bg-black text-[#E0DCD9] p-2 font-bold  md:w-96 hover:scale-105 active:scale-110 transition-all'
      onClick={handleNavigate} 
      type="email" 
      placeholder='Email'>Enter into the event</button>
      </div>
    </div>
  )
}

export default Participate
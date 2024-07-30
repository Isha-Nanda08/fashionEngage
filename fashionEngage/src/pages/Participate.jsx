import React from 'react'

function Participate() {
  return (
    <div className='bg-[#E0DCD9] flex flex-col justify-center items-center gap-5 p-10'>
      <div className='font-BN font-bold text-3xl md:text-5xl'>Participate Now!</div>

      <div className='md:text-xl'><span>Participate in the compeition and Win Exclusive Offers.</span></div>
      <div>
      <input className='border border-black bg-[#E0DCD9] p-2 text-black md:w-96' 
      type="email" 
      placeholder='Email'/>
      </div>
    </div>
  )
}

export default Participate
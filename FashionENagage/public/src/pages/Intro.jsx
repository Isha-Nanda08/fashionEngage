import React from 'react'

function Intro() {
  return (
    <div>
      <div className='bg-black flex justify-center'>
        <div className=' font-GV text-8xl p-24 md:text-9xl absolute text-[#F2F2F2] whitespace-nowrap'>Fashion Engage</div>

        <div className='pt-28 md:pt-40 flex h-96 w-full overflow-hidden items-center justify-around'>

          <div className='text-[#F4F4F4] w-48 pt-14 text-xs md:text-sm'> <span>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime cupiditate neque asperiores.
            </span></div>

          <img className='h-80 w-72  rounded-[150px]' src="https://images-platform.99static.com//3lt35Th_7ljNxT8MLhpCSIfa9b0=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/121/121095/attachment_121095177" alt="" />

          <button className='text-[#F4F4F4] cursor-pointer'>Shop Now</button>
        </div>
      </div>
    
      <div className='w-full h-56 bg-[#EAE7E4]'>
        <div className='flex justify-between items-center font-bold lg:text-7xl text-4xl font-BN p-20'>
          <span>Design</span>
          <div className='h-5 w-5 bg-black rounded-full'></div>
          <span>Create</span>
          <div className='h-5 w-5 bg-black rounded-full'></div>
          <span>Inspire</span>
        </div>
      </div>

    </div>
  )
}

export default Intro
import React from 'react'
import { Button } from "@material-tailwind/react";

function Theme() {
  return (
    <div className='flex p-10 bg-black justify-between text-[#EAE7E4]'>
      <div className='flex flex-col justify-center items-start p-5 md:p-24 w-[300px] md:w-[800px] gap-4 md:gap-8 overflow-hidden'>
        <h1 className='font-BN text-2xl md:text-7xl whitespace-nowrap'>Summer Styles</h1>
        <div className='text-xs md:text-sm w-48 md:w-[700px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit harum facere quo doloremque est dolores quaerat consequuntur minus consectetur nam, neque reprehenderit eum molestiae minima nesciunt magnam itaque aliquid nemo.</div>
        <Button>Details</Button>
      </div>

      <div className='relative'>
        <img className='h-80 w-72 md:h-96 md:w-80
        border-4 border-white' src="https://media.istockphoto.com/id/1321255356/photo/rack-with-stylish-womens-summer-clothes-concept-for-shopping-store-beauty-fashion.jpg?s=612x612&w=0&k=20&c=hbN6q6tuaPjo7jZFqx57CCLX6XuRo5TEpXmIZMqaShk=" alt="" />

        <img className='h-56 w-40 md:h-64 md:w-52 border-4 border-white absolute top-14 left-[-55px] md:left-[-85px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnMaa-6WggXdhjFUYs98Z3XWle1OAGPOgQw&s" alt="" />
      </div>
    </div>
  )
}

export default Theme
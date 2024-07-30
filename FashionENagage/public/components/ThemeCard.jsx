import React from 'react'
import Competition from '../pages/Competition'


function ThemeCard(props) {
  return (
      <div className='my-16 text-[#EAE7E4]'>
        <div className='bg-[#EAE7E4] h-80 w-80 relative'>

        <div className='h-80 w-80 bg-black absolute left-10 top-10 shadow-lg object-cover'>
          <img  className='object-cover h-full w-full' src={props.image} alt="" />
        </div>
        </div>
         <div className='mt-16 flex flex-col items-center'>
          <h1 className='text-center font-bold font-BN'>{props.item}</h1>
          <div className='flex flex-col items-center text-sm text-[#f8f7f6]'>
          <p>{`Brand: ${props.brand}`}</p>
          <p>{`Price: ${props.price}`}</p>
          <p>{`Material: ${props.material}`}</p>
          </div>
          </div>
      
    </div>
  )
}

export default ThemeCard
import React from 'react'
import Inputform from '../components/Inputform'
import CardInput from '../components/CardInput'
import {useNavigate} from "react-router-dom"

function Post() {
const navigate = useNavigate()

const handleNavigate = () => {
  navigate("/")
}
  return (
    <div className='flex justify-center items-center h-screen w-full bg-[#EAE7E4] '>
      <div className='flex flex-col h-full w-full justify-center items-center gap-4'>
       <h1 className='font-play font-bold text-4xl  p-6'>Register for the event</h1>
      <div className='bg-white rounded-lg'><Inputform/></div>
       <div className='bg-black text-[#EAE7E4] px-10 py-3 rounded-lg'><button
       onClick={handleNavigate}
       >Post your Design</button></div>
    </div>
    </div>
  )
}

export default Post
import React from 'react'
import CardDefault from '../components/Card'
import { fashionEvents } from '../Events'

function UpcommingEvents() {
  return (
   


    <div id='Upcoming' className='bg-[#EAE7E4]'>
      
      <h1 className=' text-center tracking-widest text-[#EAE7E4] bg-black'>UPCOMMING EVENTS</h1>
      <div className=' flex items-center justify-center p-4'>

     
      <div className=' grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
          fashionEvents.map((val)=>(
            <CardDefault des={val.description}
            title = {val.title}
            startD = {val.startDate}
            endD = {val.endDate}
            imgUrl = {val.imageURL}
            UpcomingEvents = {true} 
            />

          ))
        }

      </div>
      </div>
      </div>
      
  )
}

export default UpcommingEvents
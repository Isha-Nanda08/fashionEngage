import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import PastEvents from './PastEvents';
import UpcommingEvents from './UpcommingEvents';
import  FooterWithSitemap  from '../components/Footer';
import NavbarD from '../components/NavbarD';


function Designer() {

  const handleEdit  = () =>{
     setedit((prev)=>!prev)


  }

  const [edit, setedit] = useState(false);
  const [input, setinput] = useState(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut vel rerum temporibus ut animi vero porro unde labore quaerat culpa tempora, molestias quam praesentium pariatur ratione dicta nam illo.");
  return (
    <>
      <NavbarD/>
     
      <div className='flex border-b-2 w-full h-[500px]'>
      <div className='w-[35%] flex justify-center items-center bg-black h-full text-[#EAE7E4]'>
        <div className='transform rotate-270  text-7xl whitespace-nowrap font-extrabold w-fit tracking-wider font-play'>ABOUT ME</div>
           <img className='rounded-full h-80 w-72 object-cover absolute top-26 left-[25%]' src="https://i.pinimg.com/736x/b8/30/99/b830999d0947fc821412aeee2c34a0bf.jpg" alt="" />
        </div>
        <div className='w-[65%] p-16 flex flex-col justify-center items-center bg-[#EAE7E4]'>
          <div className='md:w-96 font-pop flex flex-col items-center justify-center gap-2'>
          <h1 className='text-5xl font-bold whitespace-nowrap mt-3 font-play '>My Story</h1>
          
            {
              edit ? <div>
                <textarea 
                type='text'
                value={input}
                onChange={(e)=>(setinput(e.target.value))}
                ></textarea>
              </div>
              
              : <span className='text-center md:text-base text-xs md:w-auto w-60'>
               {
                input
               }
              </span>
            }
            
           </div>
 
          <Button 
          onClick={handleEdit}
          variant='outlined'>
            {
              edit ? "Save" : "Edit"
            }
          </Button>

        </div>

        
      </div>
  
      <PastEvents id={"Past"}/>
      <UpcommingEvents/>
      <FooterWithSitemap/>
    </>
  )
}

export default Designer
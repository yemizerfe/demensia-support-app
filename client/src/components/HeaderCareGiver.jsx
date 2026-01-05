import React from 'react'
import { Link } from 'react-router-dom'


function HeaderCareGiver() {
  return (
    <div className='bg-indigo-200 z-70 w-full fixed top-0 left-0 flex flex-wrap items-end p-3'>
                      <Link to='/caregiver'className=' text-5xl font-serif font-bold '>weCare</Link>
    
          <div className='flex flex-wrap items-end mx-auto'>
            <Link to='/setReminders' className='font-serif sm: p-1 text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>Set Reminder</Link>
            <Link to='/setMemoryAlbum' className='font-serif text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>Set memoryAlbum</Link>
            <Link to='/viewLocation' className='font-serif text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>view Location</Link>
           
          </div>
          
        </div>
  )
}

export default HeaderCareGiver

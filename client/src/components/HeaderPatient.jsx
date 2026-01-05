import React from 'react'
import { Link } from 'react-router-dom'

function HeaderPatient() {
  return (
    <div className='bg-indigo-200 z-70 w-full fixed top-0 left-0 flex flex-row items-end p-3'>
                  <Link to='/patient' className='text-5xl font-serif font-bold'>weCare</Link>

      <div className='flex flex-row items-end mx-auto'>
        <Link to='/seeReminder' className='font-serif text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>See Reminder</Link>
        <Link to='/seeMemoryAlbum' className='font-serif text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>See memoryAlbum</Link>
        <Link to='/SeeWeather' className='font-serif text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>See Weather</Link>
        <Link to='/seeMemoryGame' className='font-serif text-lg font-bold mx-5 rounded-lg shadow-lg ring-1 ring-indigo-100 bg-gray-200 p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>Play Game</Link>
       
      </div>
      
    </div>
  )
}

export default HeaderPatient

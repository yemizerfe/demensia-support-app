import React from 'react'
import { Link } from 'react-router-dom'

function PatientFeatures({ text, route }) {
  return (
    <div className='border-2 border-indigo-200  shadow-lg shadow-violet-100 w-3/4 p-5 flex flex-row justify-center my-10 mx-auto rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'
      
      >
      <Link to={route} className='font-serif font-bold text-xl text-shadow-sm  rounded-xl p-5 cursor-pointer z-50 transition delay-150 duration-300 ease-in-out hover:scale-110'>{text}</Link>


    </div>
  )
}

export default PatientFeatures

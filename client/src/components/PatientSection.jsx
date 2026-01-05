import React from 'react'

function PatientSection({image,alt,text}) {
  return (
    <div className='w-sm mx-5 shadow-xl shadow-indigo-200 flex flex-col items-center my-10 transition transition-delay-150 duration-300 ease-in-out hover:scale-110'>
      <img src={image} alt='imagesOfDementia' className='w-fit'/>
      <p className='font-serif text-center text-indigo-500 text-2xl my-5'>{text}</p>
    </div>
  )
}

export default PatientSection

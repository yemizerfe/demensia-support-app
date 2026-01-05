import React from 'react'

function CaregiverSection({video,text }) {
  return (
    <div className='shadow-xl shadow-indigo-200  w-1/3 mx-10 p-5 transition transition-delay-150 duration-300 ease-in-out hover:scale-110'>
      <video loop autoPlay muted className='w-full p-3 rounded-xl mb-5 '>
                <source src={video} type='video/MP4' />
            </video>
            <p className='text-center font-serif text-xl text-indigo-500 '>{text}</p>
    </div>
  )
}

export default CaregiverSection

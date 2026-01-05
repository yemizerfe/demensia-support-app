import React from 'react'

function WhyLoved({video, text}) {
  return (
    <div className='bg-indigo-500/20 flex flex-col items-center justify-center my-7 p-10 w-3/4 rounded-xl'>
        <video loop autoPlay muted className='w-screen p-3'>
            <source src={video} type='video/MP4'/>
        </video>

        <p className='font-bold text-2xl text-center font-serif my-5 '>{text}</p>

      
    </div>
  )
}

export default WhyLoved

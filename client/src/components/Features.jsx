import React from 'react'


function Features({ image,alt,text }) {
    return (
        <div className='shadow-md shadow-indigo-500/50 w-90 h-100 flex flex-col items-center rounded-xl m-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>
            <img src={image} alt={alt} className='w-fit h-3/4 p-3' />
            <h3 className='font-semibold m-4 font-serif text-xl text-blue-600'>{text}</h3>

        </div>
    )
}

export default Features

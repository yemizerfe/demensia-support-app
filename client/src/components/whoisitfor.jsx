import React from 'react'

function whoisitfor({ image,role, text, alt }) {
    return (
        <div className='shadow-md shadow-indigo-500/50 flex flex-col justify-center m-7 p-5 w-5/6  rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-0.8 hover:scale-105'>
            <h3 className='text-blue-700 font-serif font-bold text-4xl my-5 text-center'>{role}</h3>
            <p className='font-bold text-2xl font-serif my-5 text-center'>{text}</p>
            <img src={image} alt={alt}/>

        </div>
    )
}

export default whoisitfor

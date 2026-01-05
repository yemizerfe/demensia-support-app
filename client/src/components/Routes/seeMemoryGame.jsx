import React from 'react'
import MemoryGame from '../MemoryGame'
import HeaderPatient from '../HeaderPatient'
import Footer from '../Footer'

function SeeMemoryGame() {
    return (
        <div>
            <HeaderPatient />

            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>

            <div className='flex flex-col items-center justify-center my-10'>

                <h2 className='w-full shadow-2xl shadow-indigo-100 bg-gray-100 p-5 font-serif text-2xl text-center text-indigo-500'>Enhance Your Memory Capacity!</h2>

            </div>
            <hr className='border-1 border-indigo-200' />

            <section className='mx-auto my-10'>
                <MemoryGame />
            </section>
            <Footer />
        </div>
    )
}

export default SeeMemoryGame

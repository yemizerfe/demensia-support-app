import React from 'react'
import { useState, useEffect } from 'react'
import PatientFeatures from '../PatientFeatures';
import Footer from '../Footer';
import PatientSection from '../PatientSection';
import reminder from '../../assets/images/reminder.jpg'
import memoryAlbum from '../../assets/Images/memeory-album.jpg'
import brain from '../../assets/Images/brain2.png'
import memoryImage from '../../assets/Images/brain3.png'
import clock from '../../assets/Images/clocki.png'




function PatientWelcome() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);


    }, []);
    return (
        <div>
            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-row items-center justify-center'>
                <p className=' outline-3 outline-offset-2 outline-double outline-indigo-500 w-fit h-fit text-center text-5xl rounded-full font-serif p-15 my-5 shadow-lg shadow-indigo-300 text-gray-500'
                  style={{
                    backgroundImage: `url(${clock})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                  }}
                    >
                    {currentTime.toLocaleString()}
                </p>
            </div>
            <hr className='w-1/2 mx-auto text-gray-500 border' />

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center font-serif my-10 text-4xl text-indigo-600 bg-gray-100 p-10 rounded-full w-3/4 '>Welcome To Your Daily Care Companion!</h2>
            </div>
            <hr className='w-full text-indigo-500 border' />

            <section className='flex flex-row justify-center'>
                <PatientSection image={brain}
                    text='We Care About Your Day!'
                />
                <PatientSection image={memoryImage}
                    text='We Care About Your Health!'
                />
            </section>
            <section className='outline-3 outline-offset-2 outline-double outline-indigo-400 p-5'>
                <PatientFeatures text="🔔 View Today's Reminders"
                route='/seeReminder' />
                <PatientFeatures text='📖 View Memory Album'
                route='/seeMemoryAlbum' />
                <PatientFeatures  text='🌤️ View Weather Condition' 
                route='/SeeWeather'/>
                <PatientFeatures  text='🧩 Play Game ' 
                route='/seeMemoryGame'/>
            </section>
            <Footer />


        </div>
    )
}

export default PatientWelcome

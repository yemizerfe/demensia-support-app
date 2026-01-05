import React from 'react'
import PatientFeatures from '../PatientFeatures'
import CaregiverSection from '../caregiverSection'
import Footer from '../Footer'
import CareGiverVideo from '../../assets/Videos/withvi3.mp4'
import careGiverVid from '../../assets/Videos/withapp2.mp4'

function CareGiverWelcome() {
    return (
        <div>
            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-col items-center justify-center my-10'>
                <h2 className='w-3/4 shadow-2xl shadow-indigo-100  p-5 font-serif text-2xl text-center text-indigo-500 transition transition-delay-150 duration-300 ease-in-out hover:scale-110'>Welcome To Your Effort Reducer in Helping People With Dementia!</h2>

            </div>
            <hr className='border-1 border-indigo-300' />

            <section className='flex flex-row justify-center my-10'>

                <CaregiverSection video={CareGiverVideo}
                    text='Avoid Exhausting Using weCare Which Brings Fun For Both.' />
                <CaregiverSection video={careGiverVid}
                    text='Enjoy Its Ability To Bring Collaboration For Both caregivers and Patients. ' />
            </section>

            <hr className='border-1 border-indigo-300' />

            <section className=''>

                <PatientFeatures text='⏰ Set Reminders' 
                route='/setReminders'/>
                <PatientFeatures text='📔 Set Memory Album'
                route='/setMemoryAlbum' />

                <PatientFeatures text='📍 View Location' 
                route='/viewLocation'/>
               


            </section>
            <Footer/>

        </div>
    )
}

export default CareGiverWelcome

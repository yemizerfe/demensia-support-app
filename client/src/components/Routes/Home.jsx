import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styles from './Home.module.css'
import Features from '../Features'
import Whoisitfor from '../whoisitfor'
import WhyLoved from '../WhyLoved'
import HeaderHome from '../HeaderHome'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import Footer from '../Footer'
import remindingMan from '../../assets/images/Reminding-man-image.jpg';
import MemoryCare from '../../assets/images/Memory-care.jpg';
import locationImage from '../../assets/images/GPS-image.jpg';
import careGiversImage from '../../assets/images/Caregivers-image.jpg';
import caregivers from '../../assets/images/caregivers.jpg';
import patientsImage from '../../assets/images/patients-image.jpg';
import familyWithPatients from '../../assets/images/family-with-patients.jpg';
import FamilyWithPatientsApp from '../../assets/Videos/family-with-patients-using-app-video.mp4';
import PatientsUsingApp from '../../assets/Videos/patient-using-app-video.mp4';
import caregiversWithApp from '../../assets/Videos/caregivers-video.mp4'


function Home() {
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showSigninForm, setShowSigninForm] = useState(false);


    return (
        <div>
            <HeaderHome onSignupClick={() => {
                setShowSignupForm(!showSignupForm)
                setShowSigninForm(false)
            }
            }
                onSigninClick={() => {
                    setShowSigninForm(!showSigninForm)
                    setShowSignupForm(false)
                }
                } />

            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <h3 className='text-center font-serif text-3xl font-medium text-sky-700 mb-12 font-bold'>A Supportive and Careful Dementia Support App For Patients and Caregivers.</h3>
            <div className='bg-indigo-200 p-3 my-10'>
                <p className='text-center font-serif text-4xl mt-12 font-bold'>Support For Every Step of Dementia Journey.
                </p>
                <br />
                <p className='text-center font-serif text-2xl m-5 font-bold'>Memory care, Reminders for daily tasks, Caregiver coordination and many, all in one place.</p>


            </div>

            <h2 className='font-bold font-serif text-3xl mt-30 p-10'>Features Included</h2>
            <hr />

            <section className=' p-10 flex flex-wrap items-center justify-center'>

                <Features text="Reminders For Daily Routines"
                    image={remindingMan}
                    alt="Reminding man image"
                />

                <Features text="Memory Care"
                    image={MemoryCare}
                    alt="Memory enhancing image "
                />

                <Features text="Location Tracking"
                    image={locationImage}
                    alt="Location image"
                />

                <Features text="Caregivers guide and support"
                    image={careGiversImage}
                    alt="caregivers image"
                />

            </section>

            <h2 className='font-bold font-serif text-3xl mt-30 p-15 bg-indigo-200 text-center'>Who Is It For</h2>
            <hr />


            <section className='flex flex-col items-center justify-center m-5'>

                <Whoisitfor role='For Patients'
                    text='Who need gentle care and support in their day-to-day lives.'
                    image={patientsImage}
                    alt="A patient man's image" />

                <Whoisitfor role='For Caregivers'
                    text='Who need help managing care and avoiding burnout.'
                    image={caregivers}
                    alt="A caregiver with a patient image" />

                <Whoisitfor role='For Family'
                    text='Who want peace of mind and better coordination.'
                    image={familyWithPatients}
                    alt="A family member with patient image" />

            </section>

            <h2 className='font-bold font-serif text-3xl mt-30 p-15 bg-indigo-200 text-center'>Why It Is Loved By Patients, Families and Caregivers</h2>
            <hr />



            <section className='flex flex-wrap justify-center  '>
                <WhyLoved video={PatientsUsingApp}
                    text='Easy to use by patients and their caregivers.' />

                <WhyLoved video={FamilyWithPatientsApp}
                    text='Reliable for families who are concerned for their loved ones.' />

                <WhyLoved video={caregiversWithApp}
                    text='Reducing effort for caregivers.' />

            </section>
            {showSignupForm &&
                <div className='flex flex-col items-center justify-center w-full h-full fixed inset-0 z-50  backdrop-filter backdrop-brightness-75 backdrop-blur-md '>

                    <SignUp onCloseClick={() => setShowSignupForm(!showSignupForm)} />

                </div>}

            {showSigninForm &&
                <div className='flex flex-col items-center justify-center w-full h-full fixed inset-0 z-50  backdrop-filter backdrop-brightness-75 backdrop-blur-md'>

                    <SignIn onCloseClick={() => setShowSigninForm(!showSigninForm)} />
                </div>}

            <Footer />
        </div >
    )
}

export default Home

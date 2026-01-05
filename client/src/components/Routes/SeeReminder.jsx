import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Whoisitfor from '../whoisitfor'
import PatientFeatures from '../PatientFeatures'
import HeaderPatient from '../HeaderPatient'
import Footer from '../Footer'
import reminderImage from '../../assets/Images/seere.png'

function SeeReminder() {
    const [reminders, setReminders] = useState([]);
    const [res, setRes] = useState('');

    const getReminders = async () => {
        const response = await axios.get('http://localhost:3000/viewReminders');

        if (Array.isArray(response.data))
            return setReminders(response.data);

    }

    useEffect(() => {


        getReminders();

    }, []);

    const handleDeleteReminder = async (id) => {
        const response = await axios.delete(`http://localhost:3000/deleteReminder/${id}`);

        setReminders(reminders => reminders.filter(reminder => id != reminder._id));

    }


    return (
        <div>
            <HeaderPatient />

            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-col items-center justify-center my-10'>

                <h2 className='w-full bg-gray-100 shadow-xl shadow-indigo-100 p-5 font-serif text-2xl text-center text-indigo-500'>See Reminders of The Day!</h2>

            </div>
            <section className='flex flex-row mb-20'>
                <div className=' w-64 '>
                    <Whoisitfor image={reminderImage}
                    />
                    <Whoisitfor image={reminderImage}
                    />
                    <Whoisitfor image={reminderImage}
                    />

                </div>

                <div className='w-full '>

                    {reminders.length > 0 ? (reminders.map((reminder) => (
                        <React.Fragment key={reminder._id}>
                            <PatientFeatures text={`${reminder.time}-${reminder.reminder}`} />

                            <div className='flex flex-row justify-center'>
                                <button className='ring-1 rounded-sm font-bold text-red-500 p-2 mx-10 hover: cursor-pointer focus:translate-1'
                                    onClick={() => handleDeleteReminder(reminder._id)}>Delete</button>


                            </div>
                        </React.Fragment>))) : (
                        <div className='flex flex-row justify-center'>

                            <p className='font-serif font-bold text-violet-500 my-3'>No reminders found!</p>
                        </div>
                    )
                    }

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default SeeReminder

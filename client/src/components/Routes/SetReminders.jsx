import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import HeaderCareGiver from '../HeaderCareGiver'
import Footer from '../Footer'
import reminderSetting from '../../assets/Images/reminderset.png'

function SetReminders() {
    const [time, setTime] = useState(Date.now);
    const [reminder, setReminder] = useState('');
    const [res, setRes] = useState('');


    const handleSetReminder = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:3000/setReminder', {
            time,
            reminder
        });
        console.error(response);
        setRes(response.data.message);
        setTime('');
        setReminder('');

    }
    return (
        <div>
            <HeaderCareGiver />
            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-col items-center justify-center my-10'>

                <h2 className='w-full shadow-2xl shadow-indigo-100  p-5 font-serif text-2xl text-center text-indigo-500'>Set Reminders For Daily Routines Easily!</h2>

            </div>
            <hr className='border-1 border-indigo-200' />


            <hr className='border-2 border-indigo-300' />

            <div className="flex flex-col items-center my-5" >
                <section className="shadow-xl shadow-indigo-200 w-3/4 my-10 p-10 transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-xl bg-white">

                    <div className="flex flex-row justify-center my-5 shadow-xl w-full ">
                        <img src={reminderSetting} alt="reminder" className="w-40 h-40 object-contain" />
                    </div>

                    <form className="flex flex-col items-center z-10">
                        <label htmlFor="reminderTime" className="font-serif text-xl font-bold my-5">
                            Enter The Time of The Reminder
                        </label>
                        <input
                            type="time"
                            id="reminderTime"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="outline outline-2 outline-indigo-500 w-64 font-serif font-normal rounded-sm px-2 py-1 focus:shadow-xl"
                        />

                        <label htmlFor="reminderText" className="font-serif text-xl font-bold my-5">
                            Enter The Reminder
                        </label>
                        <input
                            type="text"
                            id="reminderText"
                            name="reminder"
                            value={reminder}
                            onChange={(e) => setReminder(e.target.value)}

                            className="outline outline-2 outline-indigo-500 w-64 font-serif font-normal rounded-sm px-2 py-1 focus:shadow-xl"
                        />

                        <button
                            type="submit"
                            className="font-bold mt-10 font-serif text-md bg-indigo-300 p-3 cursor-pointer rounded-lg
        outline outline-2 outline-indigo-500 w-24 hover:bg-indigo-200 transition duration-300 ease-in-out"
                            onClick={handleSetReminder}>
                            Set
                        </button>
                    </form>

                </section>
                {res && <p className='font-serif font-bold text-violet-500 my-3'>{res}</p>}

            </div>
            <Footer />
        </div>
    )
}

export default SetReminders

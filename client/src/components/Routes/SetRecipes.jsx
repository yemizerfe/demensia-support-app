import React from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import HeaderCareGiver from '../HeaderCareGiver'
import recipe from '../../assets/Images/recipes.png'

function SetRecipes() {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSetTask = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:3000/setTask',{
            title,
            tasks
        });


    }
    return (
        <div>
            <HeaderCareGiver />
            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-col items-center justify-center my-10'>
                <h2 className='w-3/4 shadow-2xl shadow-indigo-100  p-5 font-serif text-2xl text-center text-indigo-500'>Set Orders of Tasks to Make Them Easier To Do!</h2>

            </div>
            <hr className='border-1 border-indigo-300' />

            <div className="flex flex-col items-center my-5" >
                <section className="shadow-xl shadow-indigo-200 w-3/4 my-10 p-10 transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-xl bg-white">

                    <div className="flex flex-row justify-center my-5 shadow-xl w-full ">
                        <img src={recipe} alt="recipe-image" className="w-64 h-64 object-contain" />
                    </div>

                    <form className="flex flex-col items-center z-10">
                        <label htmlFor="title" className="font-serif text-xl font-bold my-5">
                            Enter The Title of Task
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            className="outline outline-2 outline-indigo-500 w-64 h-12 font-serif font-normal rounded-sm px-2 py-1 focus:shadow-xl"
                        />

                        <label htmlFor="orderedTasks" className="font-serif text-xl font-bold my-5">
                            Enter The Order of The Task
                        </label>
                        <textarea
                            type="text"
                            id="orderedTasks"
                            value={tasks}
                            onChange={(e) => setTasks(e.target.value)}
                            name="orderedTasks"
                            className="outline outline-2 outline-indigo-500 w-64 h-20 font-serif font-normal rounded-sm px-2 py-1 focus:shadow-xl"
                        >

                        </textarea>

                        <button
                            type="submit"
                            className="font-bold mt-10 font-serif text-md bg-indigo-300 p-3 cursor-pointer rounded-lg
                                outline outline-2 outline-indigo-500 w-24 hover:bg-indigo-200 transition duration-300 ease-in-out"
                            onClick={handleSetTask}>
                            Set
                        </button>
                    </form>

                </section>
            </div>
            <Footer />
        </div>
    )
}

export default SetRecipes

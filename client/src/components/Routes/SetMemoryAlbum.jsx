import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import HeaderCareGiver from '../HeaderCareGiver'
import Footer from '../Footer'
import memoryAlbumImage from '../../assets/Images/memory.png'

function SetMemoryAlbum() {
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [res, setRes] = useState('');

    const handleSetAlbum = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('description', description);

            const response = await axios.post('http://localhost:3000/setAlbum', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setRes(response.data.message);
            setImage('');
            setDescription('');
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <HeaderCareGiver />
            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <h2 className='w-full shadow-2xl shadow-indigo-100 my-5 p-5 font-serif text-2xl text-center text-indigo-500'>Set Beautiful Memories!</h2>
            <hr className='border-1 border-indigo-200' />

            <div className="flex flex-col items-center my-5" >
                <section className="shadow-xl shadow-indigo-200 w-3/4 my-10 p-10 transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-xl bg-white">

                    <div className="flex flex-row justify-center my-5 shadow-xl w-full ">
                        <img src={memoryAlbumImage} alt="reminder" className="w-64 h-64 object-contain" />
                    </div>

                    <form className="flex flex-col items-center z-10" encType='multiPart/form-data'>
                        <label htmlFor="image" className="font-serif text-xl font-bold my-5">
                            Enter The Image To Be Placed In The Album
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="outline outline-2 outline-indigo-500 w-64 h-12 font-serif font-normal rounded-sm px-2 py-1 focus:shadow-xl"
                        />

                        <label htmlFor="description" className="font-serif text-xl font-bold my-5">
                            Enter The Description of The Image
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="outline outline-2 outline-indigo-500 w-64 h-20 font-serif font-normal rounded-sm px-2 py-1 focus:shadow-xl"
                        >

                        </textarea>

                        <button
                            type="submit"
                            className="font-bold mt-10 font-serif text-md bg-indigo-300 p-3 cursor-pointer rounded-lg
                    outline outline-2 outline-indigo-500 w-24 hover:bg-indigo-200 transition duration-300 ease-in-out"
                            onClick={handleSetAlbum}>
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

export default SetMemoryAlbum

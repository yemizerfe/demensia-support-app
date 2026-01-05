import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Features from '../Features'
import Whoisitfor from '../whoisitfor'
import HeaderPatient from '../HeaderPatient'
import Footer from '../Footer'
import seememoryAlbum from '../../assets/Images/seememories.png'

function SeeMemoryAlbum() {
    const [photos, setPhotos] = useState([]);

    const fetchImages = async () => {
        const response = await axios.get('http://localhost:3000/viewAlbum');

        console.log(response.data);
        setPhotos(response.data);
    }

    useEffect(() => {

        fetchImages();
    }, []);

    const handleDeleteAlbum = async (id) => {
        const response = await axios.delete(`http://localhost:3000/deleteAlbum/${id}`);
        setPhotos(prev => prev.filter(photo => photo._id != id));


    }
    return (
        <div>
            <HeaderPatient />
            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-col items-center justify-center my-10'>

                <h2 className='w-full shadow-2xl shadow-indigo-100  p-5 font-serif text-2xl text-center text-indigo-500'>See Memories From Your Album!</h2>

            </div>
            <hr className='border-1 border-indigo-200' />

            <section className='w-64 bg-white mx-auto'>

                <Whoisitfor image={seememoryAlbum} />
            </section>
            <div className='p-10 bg-gray-200' >
            </div>

            <section className='flex flex-wrap justify-center my-5'>
                {photos.length > 0 ? photos.map(photo => (
                    <React.Fragment key={photo._id}
                    >
                        <div className='flex flex-col items-center'>
                            <Features
                                image={`http://localhost:3000/viewAlbum/${photo.imageName}`}
                                text={photo.description}
                            />
                            <button className='ring-1 rounded-sm font-bold text-red-500 p-2 mx-10 hover: cursor-pointer focus:translate-1'
                                onClick={() => handleDeleteAlbum(photo._id)}>Delete</button>


                        </div>
                    </React.Fragment>
                )) : (<div className='flex flex-row justify-center'>

                    <p className='font-serif font-bold text-violet-500 my-3'>No Album found!</p>
                </div>
                )}

            </section>
            <Footer />
        </div>
    )
}

export default SeeMemoryAlbum

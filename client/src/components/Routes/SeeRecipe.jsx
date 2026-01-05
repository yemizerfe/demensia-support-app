import React from 'react'
import Whoisitfor from '../whoisitfor'
import RecipeSection from '../RecipeSection'
import HeaderPatient from '../HeaderPatient'
import Footer from '../Footer'
import recipeImage from '../../assets/Images/re.png'

function SeeRecipe() {
    return (
        <div className=''>
            <HeaderPatient />

            <h1 className='text-center text-7xl font-serif m-24 font-bold '>weCare</h1>
            <div className='flex flex-col items-center justify-center my-10'>

                <h2 className='w-full shadow-2xl shadow-indigo-100  p-5 font-serif text-2xl text-center text-indigo-500'>See Order of Tasks!</h2>

            </div>
            <hr className='border-1 border-indigo-200' />

            <section className='mx-auto w-40 bg-white'>

                <Whoisitfor image={recipeImage}
                />
            </section>


            <section className='flex flex-col items-center w-3/4 mx-auto'>
                <RecipeSection />
                <RecipeSection />
                <RecipeSection />
                <RecipeSection />

            </section>



            <Footer />
        </div>
    )
}

export default SeeRecipe

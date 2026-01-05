import React from 'react'
import { useState } from 'react'

function HeaderHome({ onSignupClick,onSigninClick }) {

    return (
        <div className='fixed top-0 right-0  flex flex-row justify-between m-3 p-5 z-70 '>
            <button type='button' className='mx-5 font-bold text-xl bg-indigo-300 hover:bg-indigo-200 cursor-pointer p-3 rounded-lg outline-3 outline-offset-2 outline-double outline-indigo-500 font-serif animate-bounce' onClick={onSignupClick}>SignUp</button>
            <button type='button' className=' font-bold text-lg bg-indigo-200 p-3 hover:bg-indigo-100 cursor-pointer rounded-lg outline-3 outline-offset-2 outline-double outline-indigo-500 font-serif' onClick={onSigninClick}>SignIn</button>
        </div>


    )
}

export default HeaderHome

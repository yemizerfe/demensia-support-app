import React from 'react'

function Footer() {
  return (
    <div className='bg-indigo-500/10 w-full p-15 mt-10'>
        <h2 className='font-bold font-serif text-center text-4xl'>Stay Safe With Us!</h2>
       <p className='font-bold font-serif mt-3 text-md'> &copy; {new Date().getFullYear()} weCare. All rights reserved.</p>

      </div>
  )
}

export default Footer

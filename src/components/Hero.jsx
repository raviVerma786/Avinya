import React from 'react'
import Bg from '../assets/main.jpg'
import Tools from './Tools'

const Hero = () => {
  return ( 
    <>
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          {/* Your All-in-One Utility Companion */}
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Your <span className='text-orange-500'>All-in-One</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Utility</span> Companion</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={Bg} alt="/" />
        </div>
    </div>

    <Tools/>
    </>
  )
}

export default Hero
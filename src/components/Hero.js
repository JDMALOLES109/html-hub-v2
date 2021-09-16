import React from 'react'
import tao from '../images/tao.png'
import {Link} from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <div className=' grid grid-cols-1 p-8 h-screen bg-white dark:bg-gray-900'>
                <div className='xl:grid lg:grid md:grid grid-cols-2 items-center'>
                    
                    <div className='pl-4 text-center'>
                    <h1 className='headerUno'>HTML HUB</h1>
                    <div className='pt-4 flex justify-center'>
                    <Link to='/Html' className='bg-blue-600 p-4 rounded-full text-white flex gap-2 transition duration-300 animate-bounce ease-in-out hover:bg-blue-300'>
                        Aralin na!
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </Link>
                    </div>
                    </div>
                    
                    <div className='flex justify-center'>
                    <img src={tao} alt='tao' className='xl:w-8/12 lg:w-9/12 md:w-11/12 sm:w-6/12 w-6/12 motion-safe:animate-fadeIn'/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero

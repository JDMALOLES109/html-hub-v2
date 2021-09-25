import React, {useEffect} from 'react'
import prof from '../images/prof.jpg'
import profE from '../images/emman.jpg'
import profS from '../images/steph.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Team = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <>
            <div className='bg-white dark:bg-gray-900 sm:h-auto h-auto xl:h-screen lg:h-screen md:screen grid xl:flex lg:flex md:flex sm:grid-rows-1 grid-rows-1 gap-4 p-8 justify-center items-center overflow-x-hidden overflow-y-hidden' >
                


                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={profE} alt='jd'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>Emmanuel Lobos</h1>
                <p className='text-blue-600 dark:text-blue-300'>Developer</p>
                </div>
                </div>


                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={prof} alt='jd'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>JD Maloles</h1>
                <p className='text-blue-600 dark:text-blue-300'>CEO/ Head developer</p>
                </div>
                </div>


                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={profS} alt='jd'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>Stephen Jovilliar</h1>
                <p className='text-blue-600 dark:text-blue-300'>Developer</p>
                </div>
                </div>



                
            </div>
        </>
    )
}

export default Team

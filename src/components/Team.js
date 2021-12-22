import React, {useEffect} from 'react'
import prof from '../images/prof.jpg'
import profE from '../images/emman.jpg'
import profS from '../images/steph.jpg'
import profF from '../images/fatima.jpg'
import profJ from '../images/jen.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Team = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <>
            <div className='grid grid-cols-1 bg-white pt-24' id={'Team'}>
            <div className='flex justify-center'>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={prof} alt='jd'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>JD Maloles</h1>
                <p className='text-blue-600 dark:text-blue-300'>CEO/ Head developer</p>
                </div>
                </div>
            </div>

            <div className='bg-white sm:h-auto h-auto xl:h-screen lg:h-screen md:screen grid xl:flex lg:flex md:flex sm:grid-rows-1 grid-rows-1 gap-4 p-16 justify-center items-center'>

                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={profE} alt='Emman'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>Emmanuel Lobos</h1>
                <p className='text-blue-600 dark:text-blue-300'>Developer</p>
                </div>
                </div>


                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={profF} alt='Fatima'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>Fatima Dimaunahan</h1>
                <p className='text-blue-600 dark:text-blue-300'>Developer</p>
                </div>
                </div>


                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={profJ} alt='jen'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
                </div>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl text-3xl dark:text-white'>Jennilyn Paloga</h1>
                <p className='text-blue-600 dark:text-blue-300'>Developer</p>
                </div>
                </div>


                <div>
                <div className='text-center' data-aos='fade-up'>
                <div className='flex justify-center'>
                <img src={profS} alt='Steph'  className='xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-5/12 w-5/12 rounded-md'/>
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

import React, {useEffect} from 'react'
import prof from '../images/prof.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Team = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <>
            <div className='bg-white h-screen grid grid-cols-1 overflow-x-hidden overflow-y-hidden' >
                <div className='text-center' data-aos='fade-left'>
                <div className='flex justify-center'>
                <img src={prof} alt='jd'  className='xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-4/12 w-4/12 rounded-full'/>
                </div>
                <h1 className='text-3xl'>JD Maloles</h1>
                <p className='text-blue-500'>CEO</p>
                </div>
            </div>
        </>
    )
}

export default Team

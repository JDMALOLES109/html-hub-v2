import React, {useEffect} from 'react'
import comp from '../images/comp.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Service = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
           <>
            <div className="grid grid-cols-1 h-screen" id={'Service'}>
                <div className='grid grid-cols-2'>
                    <div className='bg-gray-700 border-2 border-white flex justify-center items-center text-6xl text-white' data-aos='fade-right'>Web Development</div>
                    <div className='bg-gray-500 border-2 border-white flex justify-center items-center text-6xl text-white' data-aos='fade-left'>Programming</div>
                </div>
            </div>
        </>
    )
}

export default Service

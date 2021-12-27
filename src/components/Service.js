import React, {useEffect} from 'react'
import videoW from '../images/comp.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Service = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
           <>
            <div className="grid grid-cols-1 h-screen overflow-x-hidden overflow-y-hidden" id={'Service'}>
                <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-rows-2 grid-rows-2'>
                    <div className='xl:h-screen lg:h-screen md:h-screen bg-gray-700 border-2 border-white flex justify-center items-center' data-aos='fade-right'>
                        <div className='grid grid-rows-2'>
                            <h1 className='text-6xl text-white'>Web Development</h1>
                            <div className='flex justify-center items-center'>
                            <a href='web.js' className='bg-blue-500 rounded-md text-center p-4 text-white xl:w-2/12 lg:w-2/12 md:w-3/12 sm:w-2/12'>Aralin!</a>
                            </div>
                        </div>
                    </div>
                    <div className='xl:h-screen lg:h-screen md:h-screen bg-gray-500 border-2 border-white flex justify-center items-center' data-aos='fade-left'>
                    <div className='grid grid-rows-2'>
                            <h1 className='text-6xl text-white'>Programming</h1>
                            <div className='flex justify-center items-center'>
                            <a href='prog.js' className='bg-blue-500 rounded-md text-center p-4 text-white w-3/12'>Aralin!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service

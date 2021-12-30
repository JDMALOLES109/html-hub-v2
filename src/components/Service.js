import React, {useEffect} from 'react'
import videoW from '../videos/Gradient Liquid Blue Shapes Animation Relaxing Background Screensaver.mp4'
import videoP from '../videos/Gradient Liquid Red Shapes Background video _ Footage _ Screensaver.mp4'
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
                    <div className='flex flex-col items-center z-10 absolute'>
                            
                                <h1 className='text-6xl text-white'>Web Development</h1>
                                <a href='web.js' className='bg-blue-500 rounded-md text-center p-4 text-white w-3/12'>Aralin!</a>
                                
                        </div>
                    <video autoPlay loop muted src={videoW} type='video/mp4' className='object-fill w-full h-full hidden' />
                    </div>
                    
                    <div className='xl:h-screen lg:h-screen md:h-screen bg-gray-700 border-2 border-white flex justify-center items-center' data-aos='fade-left'>
                    <div className='flex flex-col items-center z-10 absolute'>
                            
                                <h1 className='text-6xl text-white'>Programming</h1>
                                <a href='prog.js' className='bg-blue-500 rounded-md text-center p-4 text-white w-3/12'>Aralin!</a>
                                
                        </div>
                    <video autoPlay loop muted src={videoP} type='video/mp4' className='object-fill w-full h-full hidden' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service

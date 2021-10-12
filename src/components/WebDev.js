import React, {useEffect} from 'react'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import jsLogo from '../images/js.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const WebDev = () => {
    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <>
            <div className='bg-blue-400 xl:h-screen lg:h-screen md:h-auto sm:h-auto h-auto grid grid-cols-1 p-8' id={'Webdev'}>
                <div className='grid grid-cols-1 text-white pt-20 pb-8 text-center' data-aos='fade-right'>
                    <h1 className='text-4xl'>Welcome sa Web development!</h1>
                </div>
                <div className='grid grid-cols-1' data-aos='fade-right'>
                    <div className='xl:flex lg:flex md:grid sm:grid grid grid-rows-3 justify-center items-center gap-2'>
                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                            <img src={htmlLogo} className='w-6/12'/>
                        </div>

                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                            <img src={cssLogo} className='w-9/12'/>
                        </div>

                        
                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                            <img src={jsLogo} className='w-6/12'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDev

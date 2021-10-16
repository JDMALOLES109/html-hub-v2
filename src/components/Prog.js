import React, {useEffect} from 'react'
import cSharpLogo from '../images/csharp.png'
import cLogo from '../images/c.png'
import cPLusLogo from '../images/c++.png'
import javaLogo from '../images/java.png'
import pythonLogo from '../images/python.png'
import { Link } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Prog = () => {
    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <>
            <div className='bg-blue-600 xl:h-screen lg:h-screen md:h-auto sm:h-auto h-auto grid grid-cols-1 p-8 overflow-x-hidden' id={'Prog'}>
                <div className='grid grid-cols-1 text-white pt-20 pb-8 text-center' data-aos='fade-left'>
                    <h1 className='text-4xl'>Welcome sa Programming!</h1>
                </div>
                <div className='grid grid-cols-1' data-aos='fade-left'>
                    <div className='xl:flex lg:flex md:grid sm:grid grid grid-rows-5 justify-center items-center gap-2'>
                        <Link to='/csharp'>
                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                        <img src={cSharpLogo} className='w-6/12'/>
                        </div>
                        </Link>

                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                        <img src={cLogo} className='w-6/12'/>
                        </div>

                        
                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                        <img src={cPLusLogo} className='w-6/12'/>
                        </div>


                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                        <img src={javaLogo} className='w-6/12'/>
                        </div>


                        <div className='flex justify-center items-center w-60 h-60 bg-white rounded-md transform duration-300 hover:scale-95 cursor-pointer'>
                        <img src={pythonLogo} className='w-6/12'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prog

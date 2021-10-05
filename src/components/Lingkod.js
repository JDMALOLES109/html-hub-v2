import React, {useEffect} from 'react'
import Web from '../images/web.png'
import Prog from '../images/prog.png'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Lingkod = () => {
    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);
    return (
        <>
            <div className='bg-white xl:h-screen lg:hscreen md:h-screen sm:h-auto h-auto grid grid-cols-1' id={'Service'}>
                <div className='p-10'>
                    <h1 className='text-3xl pt-8' data-aos='fade-up'>Ano ang maipaglilingkod namin sayo/sainyo</h1>

                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1' data-aos='fade-up'>
                    <div className='text-center'>
                    <div className='flex justify-center'>

                    <img src={Web} className='w-9/12 pt-8'/>

                    </div>

                    <h1>Website Service</h1>
                    <div className='pt-8'>
                    <Link to='/' className='bg-blue-600 p-4 rounded-full text-white transition duration-300 hover:bg-blue-300'>
                        Detalye
                    </Link>
                    </div>
                    </div>

                    <div className='text-center'>
                    <div className='flex justify-center'>

                    <img src={Prog} className='w-9/12 pt-8'/>

                    </div>

                    <h1>Programming Service</h1>
                    <div className='pt-8'>
                    <Link to='/' className='bg-blue-600 p-4 rounded-full text-white transition duration-300 hover:bg-blue-300'>
                        Detalye
                    </Link>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lingkod

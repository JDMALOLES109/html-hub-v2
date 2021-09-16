import React, {useEffect} from 'react'
import comp from '../images/comp.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Content = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    return (
        <>
            <div className='bg-white dark:bg-gray-900 grid grid-cols-1 p2 h-screen overflow-x-hidden overflow-y-hidden'>
                
                        <div className='xl:flex lg:flex md:flex justify-between items-center'>
                            
                                <div className='pl-8 text-center' data-aos='fade-right'>
                                <h1 className='text-4xl dark:text-white'>Kami ang bahala sayo!</h1>
                                <p className='parag'>HTML? JS? CSS? cover namin ito lahat!</p>
                                </div>


                            <div className="flex justify-center" data-aos='fade-right'>
                            <img src={comp} alt='comp' className='pt-8 xl:w-max lg:w-max md:w-max sm:w-6/12 w-6/12'/>
                            </div>

                        
                    
                </div>
            </div>
        </>
    )
}

export default Content

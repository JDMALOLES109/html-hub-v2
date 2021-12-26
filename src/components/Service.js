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
            <div className="hero grid grid-cols-1 h-screen">
                <div className='grid grid-cols-2'>
                    <div className='border-2 border-white flex justify-center'>hello</div>
                    <div className='border-2 border-white'>world</div>
                </div>
            </div>
        </>
    )
}

export default Service

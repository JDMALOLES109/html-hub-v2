import React from 'react'
import { Link } from 'react-router-dom'
import tao from '../images/tao.png'
const Hero = () => {
    return (
        <>
            <div className=' grid grid-cols-1 p-2 h-screen'>
                <div className='xl:grid lg:grid md:grid grid-cols-2 items-center'>
                    
                    <h1 className='text-7xl text-center'>HTML HUB</h1>
                    
                    <img src={tao} alt='tao' className='w-8/12'/>
                    
                </div>
            </div>
        </>
    )
}

export default Hero

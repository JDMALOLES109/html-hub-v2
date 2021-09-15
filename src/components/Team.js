import React from 'react'
import prof from '../images/prof.jpg'
const Team = () => {
    return (
        <>
            <div className='bg-white h-screen grid grid-cols-1'>
                <div className='text-center'>
                <div className='flex justify-center'>
                <img src={prof} alt='jd'  className='xl:w-3/12 lg:w-3/12 md:w-4/12 sm:w-4/12 w-8/12 rounded-full'/>
                </div>
                <h1 className='text-3xl'>JD Maloles</h1>
                <p className='text-blue-500'>CEO</p>
                </div>
            </div>
        </>
    )
}

export default Team

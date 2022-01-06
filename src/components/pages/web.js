import React from 'react'
import videoW from 'C:/Users/LENOVO/Desktop/react/html-hub-v2/src/videos/Gradient Liquid Blue Shapes Animation Relaxing Background Screensaver.mp4'

const web = () => {
    return (
        <>
        
            <div className='h-screen grid grid-cols-1'>
            
                <div className='grid grid-cols-3 gap-4 z-10 absolute p-10'>
                    <div className='border-white border-2 rounded-lg flex justify-center items-center'><a href='cSharp' className='text-white text-3xl'>C#</a></div>
                    <div className='border-white border-2 rounded-lg flex justify-center items-center'><a href='c'  className='text-white text-3xl'>C</a></div>
                    <div className='border-white border-2 rounded-lg flex justify-center items-center'><a href='cPlus'  className='text-white text-3xl'>C++</a></div>
                    <div className='col-span-2 border-white border-2 rounded-lg flex justify-center items-center'><a href='java'  className='text-white text-3xl'>Java</a></div>
                    <div className='border-white border-2 rounded-lg flex justify-center items-center'><a href='python'  className='text-white text-3xl'>Python</a></div>
                </div>
                
                <video autoPlay loop muted src={videoW} type='video/mp4' className='-mt-20 object-fill w-full h-full' />
            </div>
        </>
    )
}

export default web

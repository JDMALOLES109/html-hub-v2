import React from 'react'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import jsLogo from '../images/js.png'

const WebDev = () => {
    return (
        <>
            <div className='bg-blue-400 h-screen grid grid-cols-1 p-8' id={'Webdev'}>
                <div className='grid grid-cols-1 text-white pt-20 text-center'>
                    <h1 className='text-4xl'>Welcome sa Web development!</h1>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='flex justify-center items-center gap-2'>
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

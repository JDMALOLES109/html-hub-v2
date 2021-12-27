import React from 'react'
import loc from '../images/akar-icons_location.png'
import mail from '../images/clarity_email-solid.png'

const Footer = () => {
    return (
        <>
            <div className='h-auto bg-white'>
                <div className='h-52 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-rows-3 sm:grid-rows-2 grid-rows-2'>
                    <div className='pl-10 pt-10'>
                        <h1 className='xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl text-5xl'>HTML HUB</h1>
                        <div className='flex pt-4'>
                            <img src={loc}  className='h-6'/>
                            <p className='text-xl text-blue-400'>San Pedro Laguna</p>
                        </div>
                        <div className='flex pt-4'>
                            <img src={mail}  className='h-6'/>
                            <p className='text-xl text-blue-400'>htmlhub111@hmail.com</p>
                        </div>
                    </div>

                    <div className='h-52 text-blue-400 text-center grid grid-rows-4'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className='sm:hidden hidden xl:block lg:block md:hidden'>
                        <p>Since 2020</p>
                        </div>
                    </div>

                    <div className='h-52 text-xl text-blue-400 text-right grid grid-rows-3 pr-10'>
                        <div></div>
                        <div>
                        <p>Log in</p>
                        </div>
                        <div>
                        <p>Sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <div className='grid grid-cols-1 h-16 bg-gray-700 shadow text-white'>
            <div className='flex justify-between items-center'>
            <Link to = '/' className="pl-8">HTML HUB</Link>

            <div className='cursor-pointer lg:hidden md:hidden pr-2' onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            </div>


            <div className='pr-4 lg:block sm:hidden md:block hidden '>
            <Link to='/' className='p-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>Home</Link>
            <Link to='/' className='p-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>HTML</Link>
            <Link to='/' className='p-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>CSS</Link>
            <Link to='/' className='p-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>JS</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar

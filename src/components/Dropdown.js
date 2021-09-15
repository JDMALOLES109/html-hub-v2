import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <>
            <div className={isOpen ? 'bg-blue-600 grid grid-rows-4 text-center items-center text-white motion-safe:animate-fadeIn' : 'hidden'} onClick={toggle}>
                <Link to='/' className='p-4 hover:bg-blue-400 transition duration-300'>Home</Link>
                <Link to='/' className='p-4 hover:bg-blue-400 transition duration-300'>HTML</Link>
                <Link to='/' className='p-4 hover:bg-blue-400 transition duration-300'>CSS</Link>
                <Link to='/' className='p-4 hover:bg-blue-400 transition duration-300'>JS</Link>
            </div>  
        </>
    )
}

export default Dropdown

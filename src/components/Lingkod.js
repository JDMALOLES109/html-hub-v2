import React from 'react'
import Web from '../images/web.png'
import Prog from '../images/prog.png'
const Lingkod = () => {
    return (
        <>
            <div className='bg-white h-screen grid grid-cols-1'>
                <div className='p-10'>
                    <h1 className='text-3xl'>Ano ang maipaglilingkod namin sayo/sainyo</h1>

                    <div className='flex  gap-4 items-center justify-center pt-8'>
                    <img src={Web} />
                    <img src={Prog} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Lingkod

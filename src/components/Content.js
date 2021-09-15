import React from 'react'
import comp from '../images/comp.png'

const Content = () => {
    return (
        <>
            <div className='bg-white grid grid-cols-1 p2 h-screen'>
                
                        <div className='xl:flex lg:flex md:flex justify-between items-center'>
                            
                                <div className='pl-8'>
                                <h1 className='text-4xl'>Kami ang bahala sayo!</h1>
                                <p className='text-blue-600'>HTML? JS? CSS? cover namin ito lahat!</p>
                                </div>


                            <img src={comp} alt='comp' className='w-max'/>

                        
                    
                </div>
            </div>
        </>
    )
}

export default Content

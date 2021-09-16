import React from 'react'
import TabsHtml from '../components/tabsHtml'



const Html = () => {




    return (
        <>
            <div className='bg-gray-100 h-screen grid grid-cols-1 p-4 motion-safe:animate-fadeIn'>

            <div className='xl:flex lg:flex justify-between items-center'>
                <div className='xl:text-left lg:text-left md:text-center sm:text-center text-center'>
                    <h1 className='headerUno'><span className='text-red-500'>H</span>yper <span className='text-red-500'>T</span>ext <span className='text-red-500'>M</span>arkup <span className='text-red-500'>L</span>anguage</h1>
                    <p className='parag pb-4'>Ang buto ng website</p>
                </div>
                <div>
                  <TabsHtml />
                </div>
            </div>

            </div>
        </>
    )
}

export default Html

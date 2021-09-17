import React, {useState, useEffect} from 'react'
import TabsHtml from '../components/tabsHtml'
import { Switch } from '@headlessui/react';


const IDE = () => {
    const [isEnabled, setIsEnabled] = useState(true);
 
    return (
        <>
            <div className='bg-gray-100 h-screen grid grid-cols-1 p-4 motion-safe:animate-fadeIn'>
                <div className='xl:flex lg:flex md:flex sm:text-center text-center justify-between items-center'>
                    <div className='xl:text-left lg:text-left md:text-left'>
                    <h1 className='headerUno'><span className='text-red-500'>I</span>ntegrated <span className='text-red-500'>D</span>evelopment <span className='text-red-500'>E</span>nvironment</h1>
                        <p className='pt-4'>Ang Integrated development environment or in short IDE ay ang tawag sa app or text editor na iyong ginagamit sa pag compile, execute at live ng iyong code file.</p>




                    </div>
                <div>
                    <Switch className={isEnabled ? 'hidden' : 'cursor-pointer block '} checked={isEnabled}
            onChange={setIsEnabled} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="blue">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    </Switch>
                    <Switch className={isEnabled ? 'cursor-pointer block ' : 'hidden'} checked={isEnabled}
            onChange={setIsEnabled} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="blue">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                    </Switch>
                <div className={isEnabled ? 'hidden' : 'block text-left motion-safe:animate-fadeIn'}>
                <TabsHtml />
                </div>
                </div>
                </div>
            </div>

            <div className='h-screen bg-gray-100 grid grid-cols-1 pt-16'>
                         <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4 '>
                        <div className=''>
                            <div className='bg-white rounded-md p-2'>
                            <h1 className='headerDos'>Mga bagay na kailangan malaman</h1>
                            <p className='xl:leading-6 lg:leading-6 md:leading-6 sm:leading-4 leading-4 text-left'>Maraming libre na IDE na pwede mong gamitin o iinstall. Itatala sa ibaba ang mga link o download site ng mga ito.

                            Small weight size lamang ang mga IDE at pwede idownload sa lahat ng computer o laptop. Itatala din sa ibaba ang IDE na pwede sa smartphone.</p>
                            </div>
                        </div>
                        </div>
            </div>
        </>
    )
}

export default IDE

import React, {useState, useEffect} from 'react'
import TabsHtml from '../components/tabsHtml'
import { Switch } from '@headlessui/react';
import Ides from '../images/ides.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const IDE = () => {

    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);

    const [isEnabled, setIsEnabled] = useState(true);
 
    return (
        <>
            <div className='bg-gray-200 h-screen grid grid-cols-1 p-4 motion-safe:animate-fadeIn'>
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

            <div className='h-screen bg-gray-200 grid grid-cols-1 pt-16'>
                         <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4 '>
                        <div className=''>
                            <div className='bg-white rounded-md p-2 shadow-xl' data-aos='fade-up'>
                            <h1 className='headerDos'>Mga bagay na kailangan malaman</h1>
                            <p className='xl:leading-6 lg:leading-6 md:leading-6 sm:leading-4 leading-4 text-left'>Maraming libre na IDE na pwede mong gamitin o iinstall. Itatala sa ibaba ang mga link o download site ng mga ito.

                            Small weight size lamang ang mga IDE at pwede idownload sa lahat ng computer o laptop. Itatala din sa ibaba ang IDE na pwede sa smartphone.</p>
                            </div>
                        </div>
                        </div>
            </div>




            <div className='h-screen bg-gray-200 grid grid-cols-1'>
                         <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4 '>

                            <div className='flex xl:items-start lg:items-start md:items-start sm:justify-center justify-center'>
                                <img src={Ides} alt='Ides' className='w-6/12' data-aos='fade-up'/>
                            </div>

                        <div className='pt-8'>
                            <div className='bg-white rounded-md p-2 h-auto shadow-xl' data-aos='fade-up'>
                            <h1 className='headerDos'>Ang mga IDE</h1>
                            <p className='parag'>Ang listahan para sa platform na laptop/computer:</p>
                            <ul className='list-disc list-inside'>
                                <li><a href='https://code.visualstudio.com/Download' className='text-blue-300'>Visual Studio Code</a> isa sa mabisa at ginagamit ng karamihan sa pag gawa ng website.</li>
                                <li><a href='https://notepad-plus-plus.org/downloads/' className='text-blue-300'>Notepad ++</a> ang pinaka simple at light-weight na IDE sa balat ng lupa.</li>
                                <li><span className='text-blue-300'>Notepad</span> makikita ito sa iyong computer/laptop. Hindi ito maganda gamitin dahil hindi mo makikita ng mabilis ang iyong mga error.</li>
                                <li><a href='https://www.sublimetext.com/download' className='text-blue-300'>Sublime Text</a> kasing level ng vscode at ginagamit din ng karamihan na professional.</li>
                                <li><a href='https://atom.io/' className='text-blue-300'>Atom</a> halos kaparehas ng vscode pagdating sa itsura at environment.</li>
                            </ul>
                        </div>
                        </div>
            </div>
            </div>
            <div className='bg-gray-200 h-72 sm:h-72 md:h-28 lg:h-20 xl:h-20'></div>
        </>
    )
}

export default IDE

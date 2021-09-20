import React from 'react'
import TabsForLessons from '../components/tabsForLessons'


const IDE = () => {
    return (
        <>
            <div className='bg-gray-300 h-auto grid grid-cols-2 pl-4 pt-4 pb-4'>
                <div className='text-center'>
                    <div className='pb-4'>
                    <h1 className='text-4xl'>Integrated Development Environment</h1>
                    <p className='text-blue-500'>IDE</p>
                    </div>

                    <div className='bg-white h-auto rounded-lg p-4 text-left'>
                        <div className='pb-8'>
                        <h1 className='text-4xl'>Introduction</h1>
                        <p>Ang Integrated development environment or in short IDE ay ang tawag sa app or text editor na iyong ginagamit sa pag compile, execute at live ng iyong code file.</p>
                        </div>

                        <div className='pb-8'>
                        <h1 className='text-4xl'>Mga bagay na kailangan malaman</h1>
                        <p>Maraming libre na IDE na pwede mong gamitin o iinstall. Itatala sa ibaba ang mga link o download site ng mga ito.

                        Small weight size lamang ang mga IDE at pwede idownload sa lahat ng computer o laptop. Itatala din sa ibaba ang IDE na pwede sa smartphone.</p>
                        </div>

                        <div className='pb-8'>
                        <h1 className='text-4xl'>Ang mga IDE</h1>
                        <ul className='list-disc pl-4 pt-4'>
                            <li><a href='https://code.visualstudio.com/Download' className='text-blue-500'>Visual Studio Code</a> isa sa mabisa at ginagamit ng karamihan sa pag gawa ng website.</li>
                            <li><a href='https://notepad-plus-plus.org/downloads/'className='text-blue-500'>Notepad++</a> ang pinaka simple at light-weight na IDE sa balat ng lupa.</li>
                            <li><a className='text-blue-500'>Notepad</a> makikita ito sa iyong computer/laptop. Hindi ito maganda gamitin dahil hindi mo makikita ng mabilis ang iyong mga error.</li>
                            <li><a href='https://www.sublimetext.com/download' className='text-blue-500'>Sublime text</a>  kasing level ng vscode at ginagamit din ng karamihan na professional.</li>
                            <li><a href='https://atom.io' className='text-blue-500'>Atom</a> halos kaparehas ng vscode pagdating sa itsura at environment.</li>
                        </ul>
                        </div>

                    </div>
                </div>


            <div className='flex justify-end'>
            <div className='w-7/12'>
            <TabsForLessons />
            </div>
            </div>


            </div>  
        </>
    )
}

export default IDE

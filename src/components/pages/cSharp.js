import React from 'react'

const cSharp = () => {
    return (
        <>
           <div className='bg-black h-auto grid grid-cols-1 -mt-20 px-5'>
           
                <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-rows-1 sm:grid-rows-1 grid-rows-1 gap-4 mt-20'>
                        <div className='xl:col-span-3 lg:col-span-3 text-white border-white border-2'>
                        <div className='flex justify-center items-center'>
                        <div className='col col-rows-2 p-4'>
                        <h1 className='text-7xl m-2'>Ang C#</h1>
                        <p className='text-xl text-blue-300'>Ang c# (c sharp) ay isang programming language na ginagamit upang makabuo ng web and desktop applications, games at marami pang iba. Hindi ito mahirap 
                            pag aralan ngunit kailangan mo ng determinasyon at paglaan ng oras upang ito ay lubos na maunawaan.</p>
                        <br/>
                        <h2 className='text-3xl'>Ang mga dapat malaman:</h2>
                        <p className='text-xl text-blue-300'>Upang makapag code ng c#, kailangan mo mag install ng isang IDE o 
                            <i> Integrated Development Environment</i>, ito ay ang application na kailangan mo para maicompile ang iyong c# program o code.</p>
                            <br/>
                            <p className='text-xl'>Mayroon tayong dalawang uri ng IDE or compiler: <strong>Online Compiler</strong> at <strong>Installable Compiler</strong></p>
                            <div className='grid grid-cols-1 my-6'></div>
                        <h2 className='text-3xl text-right'>Ang Online Compiler</h2>
                        </div>
                        </div>
                        </div>
                        
                        <div className='grid grid-rows-10 border-2 border-blue-200 rounded-md p-10 text-white text-md'>
                        <a href='' className='bg-green-500 p-2 rounded-md'>Introduction</a>
                        <a href=''>Syntax</a>
                        <a href=''>Comments</a>
                        <a href=''>Data Types</a>
                        <a href=''>User Input</a>
                        <a href=''>Operators</a>
                        <a href=''>Variables</a>
                        <a href=''>Strings</a>
                        <a href=''>Conditions</a>
                        <a href=''>Arrays</a>
                    </div>
                    </div>
            </div> 
        </>
    )
}

export default cSharp

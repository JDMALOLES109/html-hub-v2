import React, {useState} from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Team from '../components/Team'
import {Switch} from '@headlessui/react'

const Home = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <>
        <div className={isEnabled ? 'dark' : ''}>
            <div className='bg-white dark:bg-gray-900 dark:text-white'>
            <Switch
            className='outline-none'
            checked={isEnabled}
            onChange={setIsEnabled}
      >

        <span className={isEnabled ? 'block bg-white rounded-full shadow p-2 h-10 w-20 transform transition duration-200 ease-in-out flex justify-end' : 'block bg-white rounded-full shadow p-2 h-10 w-20 transform transition duration-500 ease-in-out flex'}>
          <span className={isEnabled ? 'block h-full w-10 rounded-full bg-blue-900 transform transition duration-200 ease-in-out' : 'block h-full w-10 rounded-full bg-yellow-100 transform transition duration-200 ease-in-out'}>
          </span>
</span>
        {isEnabled && 'Dark mode'}
        {!isEnabled && 'Light mode'}
      </Switch>
            </div>
        <Hero />
        <Content />
        <Team />
        </div>
        </>
    )
}

export default Home

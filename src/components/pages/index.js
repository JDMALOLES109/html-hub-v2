import React, {useState} from 'react'
import HeroSection from '../HeroSection'
import Service from '../Service';
import Team from '../Team';
import Lingkod from '../Lingkod';
import WebDev from '../WebDev';
import Prog from '../Prog';
const Home = () => {




    return (
        <>
           
            <HeroSection />
            <Service />
            <Lingkod />
            <Prog />
            <WebDev />
            <Team />
            
        </>
    )
}

export default Home

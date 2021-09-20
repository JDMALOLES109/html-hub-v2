import React from 'react'
import Video from '../../videos/Tunnel - 84938.mp4'
import { HeroContainer, HeroBg, VideoBg } from './Hero'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection

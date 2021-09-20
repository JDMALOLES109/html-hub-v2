import React from 'react'
import Video from '../../videos/4K Neon VJ Motion Background - Neon Lines Free VJ Loops - 4K VJ Loops - Free Video Background Loops.mp4'
import { HeroContainer, HeroBg, VideoBg } from './Hero'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection

import React from 'react'
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroH1,
    HeroContent
 } from './HeroElements'
 import Video from '../../videos/Abstract - 41940.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>HTML HUB</HeroH1>
                <HeroBtnWrapper>
                    <button to='/'>
                        Aral na!
                    </button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
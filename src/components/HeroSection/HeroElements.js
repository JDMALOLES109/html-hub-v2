import styled from 'styled-components'


export const HeroContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-top: -80px;
`

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    backgound: #232a34;
`
export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.div `
    color: #fff;
    font-size: 72px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 70px;
    }

    @media screen and (max-width: 480px) {
        font-size: 62px;
    }
`

export const HeroBtnWrapper = styled.div `
     margin-top: 32px;
     display: flex;
     flex-direction: column;
     align-items: center;
`


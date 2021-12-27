import React, { useState, useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {

    
        const [scrollNav, setScrollNav] = useState(false)

        const changeNav = () => {
            if(window.scrollY >= 80) {
                setScrollNav(true)
            }
            else {
                setScrollNav(false)
            }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        HTML HUB
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Service'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            >Modules</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Team'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            >Team</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin' className='bg-blue-400'>Sign in</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

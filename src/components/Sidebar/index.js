import React from 'react'
import { SidebarContainer } from './SidebarElements'
import { Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
 } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='Service'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                         onClick={toggle}>
                            Service
                        </SidebarLink>
                        <SidebarLink to='Team'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                         onClick={toggle}>
                            Team
                        </SidebarLink>
                        <SidebarLink to='Prog' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                         onClick={toggle}>
                            Programming
                        </SidebarLink>
                        <SidebarLink to='Web'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                         onClick={toggle}>
                            Web dev
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/' className='bg-blue-400'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>  
        </>
    )
}

export default Sidebar

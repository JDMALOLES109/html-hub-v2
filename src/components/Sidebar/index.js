import React from 'react'
import { SidebarContainer } from './SidebarElements'
import { Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
 } from './SidebarElements'

const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about'>
                            About
                        </SidebarLink>
                        <SidebarLink to='Team'>
                            Team
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>  
        </>
    )
}

export default Sidebar

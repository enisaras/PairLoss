import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>Set Goals</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>Track</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Features</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>Get Started</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign in</SidebarRoute>
          <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

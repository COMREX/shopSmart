import React from 'react'
import { DesktopContentWrapper, DesktopNavWrapper,  NavButton,   NavLinks,   NavLogo,  NavRightButtons,  NavRightItems,   } from './desktopHeader.styles'
import Navlogo from '../../../Assets/svgs/logo.svg'
export default function DesktopHeader({children,signout,signin}) {
  return (

    <DesktopNavWrapper>
      <DesktopContentWrapper>
      <NavLogo src={Navlogo} alt='img'/>
      
      
         <NavRightItems>
         <NavLinks>
            {/* <NavLI></NavLI> */}
            {children}
            
         </NavLinks>
            <NavRightButtons>
            <NavButton>{signin}</NavButton>
            <NavButton>{signout}</NavButton>
            </NavRightButtons>
         </NavRightItems>
        
      </DesktopContentWrapper>
    </DesktopNavWrapper>
    
  )
}

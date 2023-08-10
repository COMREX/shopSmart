import React, { useState } from "react";
import {
  DesktopContentWrapper,
  DesktopNavWrapper,
  NavButton,
  NavLI,
  NavLinks,
  NavLogo,
  NavRightButtons,
  NavRightItems,
} from "./desktopHeader.styles";
import Navlogo from "../../../Assets/svgs/logo.svg";
const DesktopHeader = () => {
  const [Islogin, SetisLogin] = useState(false);

  const HandleLogin = () => {
    SetisLogin(true);
  };
  const HandleLogout = () => {
    SetisLogin(false);
  };

  return (
    <DesktopNavWrapper>
      <DesktopContentWrapper>
        <NavLogo src={Navlogo} alt="img" />

        <NavRightItems>
          {Islogin && (
            <NavLinks>
              <NavLI>HOME</NavLI>
              <NavLI>ABOUT</NavLI>
              <NavLI>CONTACT</NavLI>
            </NavLinks>
          )}

          <NavRightButtons>
            {Islogin ? (
              <NavButton onClick={HandleLogout}>Logout</NavButton>
            ) : (
              <>
                <NavButton onClick={HandleLogin}>Login</NavButton>
                <NavButton onClick={HandleLogin}>Signup</NavButton>
              </>
            )}
          </NavRightButtons>
        </NavRightItems>
      </DesktopContentWrapper>
    </DesktopNavWrapper>
  );
};

export default DesktopHeader;

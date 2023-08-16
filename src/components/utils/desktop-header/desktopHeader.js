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
import { useNavigate } from "react-router-dom";
const DesktopHeader = () => {
  const [Islogin, SetisLogin] = useState(false);
  const navigate = useNavigate();

  const HandleLogin = () => {
    SetisLogin(true);
  };
  const HandleLogout = () => {
    SetisLogin(false);
  };

  return (
    <DesktopNavWrapper>
      <DesktopContentWrapper>
        <NavLogo src={Navlogo} alt="img" onClick={() => navigate("/home")} />

        <NavRightItems>
          {Islogin && (
            <NavLinks>
              <NavLI onClick={() => navigate("/home")}>HOME</NavLI>
              <NavLI>ABOUT</NavLI>
              <NavLI onClick={() => navigate("/customer-services")}>
                CONTACT
              </NavLI>
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

export const authenticationHeader = () => {
  return <div>isAuthenticated header</div>;
};

export const AppHeader = () => {
  return <div>App header</div>;
};

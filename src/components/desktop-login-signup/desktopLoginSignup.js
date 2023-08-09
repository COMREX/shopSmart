import React, { useState } from "react";
import {
  AuthMainContainer,
  DesktopLoginSignupWrapper,
  WrapperLeftSide,
  CancelWrapper,
} from "./desktopLoginSignup.styles";
import crossImage from "../../Assets/svgs/xmark-solid.svg";
import DesktopLogin from "../desktop-login/desktopLogin";
import DesktopSignup from "../desktop-signup/desktopSignup";

const DesktopLoginSignup = ({ handleCross }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const handleClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <DesktopLoginSignupWrapper>
      <WrapperLeftSide>
        <AuthMainContainer isLoginVisible={isLoginVisible}>
          <DesktopLogin handleClick={handleClick} />
          <DesktopSignup handleClick={handleClick} />
        </AuthMainContainer>
      </WrapperLeftSide>
      <CancelWrapper>
        <img src={crossImage} alt="" onClick={handleCross} />
      </CancelWrapper>
    </DesktopLoginSignupWrapper>
  );
};

export default DesktopLoginSignup;

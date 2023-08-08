import React from "react";
import {
  DesktopLoginWrapper,
  LoginLeftSide,
  LoginRightSide,
  DesktopLoginForm,
  LoginIcons,
  ParaText,
  CrossIcon,
  SignInWrapper,
} from "./desktopLogin.styles";
import AuthHeader from "../utils/auth-header/authHeader";
import sideImage from "../../Assets/images/desktop-login-page.png";
import Input from "../utils/input/input";
import google from "../../Assets/svgs/google.svg";
import twitter from "../../Assets/svgs/twitter.svg";
import facebook from "../../Assets/svgs/fb.svg";
import Button from "../utils/button/button";
import xmark from "../../Assets/svgs/xmark-solid.svg";
const DesktopLogin = ({ handleCross }) => {
  return (
    <SignInWrapper>
      <AuthHeader
        heading={"Welcome to ShopSmart"}
        paragraph={"Fill Login form below correctly"}
        headerBg={"rgba(6, 145, 154, 0.8)"}
        height={"16rem"}
      />
      <DesktopLoginForm>
        <Input
          InputBg={"#fff"}
          type={"text"}
          placeholder={"Email"}
          width={"70%"}
          height={"4rem"}
          boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
        />
        <Input
          InputBg={"#fff"}
          type={"text"}
          placeholder={"Password"}
          width={"70%"}
          height={"4rem"}
          boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
        />
        <LoginIcons>
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </LoginIcons>
        <Button
          color={"#fff"}
          bg={(props) => props.theme.color.primary}
          width={"7.8rem"}
          height={"3.5rem"}
          fontSize={"1.2rem"}
        >
          LOGIN
        </Button>
        <ParaText>
          You don’t have any account?<span> Sign Up</span>
        </ParaText>
      </DesktopLoginForm>
    </SignInWrapper>
  );
};

export default DesktopLogin;

import React from "react";
import {
  CrossIcon,
  ParaText,
  SignupIcons,
  DesktopSignupForm,
  DesktopSignupWrapper,
  SignupLeftSide,
  SignupRightSide,
} from "./desktopSignup.styles";
import AuthHeader from "../utils/auth-header/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import google from "../../Assets/svgs/google.svg";
import facebook from "../../Assets/svgs/fb.svg";
import twitter from "../../Assets/svgs/twitter.svg";
import xmark from "../../Assets/svgs/xmark-solid.svg";

const DesktopSignup = ({ handleCross }) => {
  return (
    <SignupRightSide>
      <AuthHeader
        heading={"Welcome to ShopSmart"}
        paragraph={"Fill Login form below correctly"}
        headerBg={"rgba(6, 145, 154, 0.8)"}
        height={"16rem"}
      />
      <DesktopSignupForm>
        <Input
          InputBg={"#fff"}
          type={"text"}
          placeholder={"First Name"}
          width={"70%"}
          height={"4rem"}
          boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
        />
        <Input
          InputBg={"#fff"}
          type={"text"}
          placeholder={"Last Name"}
          width={"70%"}
          height={"4rem"}
          boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
        />
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
        <SignupIcons>
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </SignupIcons>
        <Button
          color={"#fff"}
          bg={(props) => props.theme.color.primary}
          width={"7.8rem"}
          height={"3.5rem"}
          fontSize={"1.2rem"}
        >
          SIGNUP
        </Button>
        <ParaText>
          Already have an Account? <span> Login</span>
        </ParaText>
      </DesktopSignupForm>
    </SignupRightSide>
  );
};
export default DesktopSignup;

import React, { useState } from "react";
import {
  DesktopLoginWrapper,
  DesktopLoginForm,
  LoginIcons,
  ParaText,
  SigninWrapper,
  WrapperRightSide,
} from "./desktopLogin.styles";
import AuthHeader from "../utils/auth-header/authHeader";
import Input from "../utils/input/input";
import google from "../../Assets/svgs/google.svg";
import twitter from "../../Assets/svgs/twitter.svg";
import facebook from "../../Assets/svgs/fb.svg";
import Button from "../utils/button/button";
import { useNavigate } from "react-router-dom";
const DesktopLogin = ({ handleCross, handleClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormData("");
  };
  return (
    <DesktopLoginWrapper>
      <SigninWrapper>
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
            name="email"
            placeholder={"Email"}
            width={"70%"}
            height={"4rem"}
            boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            InputBg={"#fff"}
            type={"password"}
            name="password"
            placeholder={"Password"}
            width={"70%"}
            height={"4rem"}
            boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
            value={formData.password}
            onChange={handleChange}
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
            onClick={() => navigate("/home")}
          >
            LOGIN
          </Button>
          <ParaText>
            You don’t have any account?
            <span onClick={handleClick}> Sign Up</span>
          </ParaText>
        </DesktopLoginForm>
      </SigninWrapper>
      <WrapperRightSide></WrapperRightSide>
    </DesktopLoginWrapper>
  );
};

export default DesktopLogin;

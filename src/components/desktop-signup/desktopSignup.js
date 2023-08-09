import React, { useState } from "react";
import {
  ParaText,
  SignupIcons,
  DesktopSignupForm,
  DesktopSignupWrapper,
  SignupRightSide,
  WrapperRightSide,
} from "./desktopSignup.styles";
import AuthHeader from "../utils/auth-header/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import google from "../../Assets/svgs/google.svg";
import facebook from "../../Assets/svgs/fb.svg";
import twitter from "../../Assets/svgs/twitter.svg";
import { useNavigate } from "react-router-dom";

const DesktopSignup = ({ handleCross, handleClick }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
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
    <>
      <DesktopSignupWrapper>
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
              name={"fname"}
              placeholder={"First Name"}
              width={"70%"}
              height={"4rem"}
              boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
              value={formData.fname}
              onChange={handleChange}
            />
            <Input
              InputBg={"#fff"}
              type={"text"}
              name={"lname"}
              placeholder={"Last Name"}
              width={"70%"}
              height={"4rem"}
              boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
              value={formData.lname}
              onChange={handleChange}
            />
            <Input
              InputBg={"#fff"}
              type={"text"}
              name={"email"}
              placeholder={"Email"}
              width={"70%"}
              height={"4rem"}
              boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              InputBg={"#fff"}
              type={"text"}
              name={"password"}
              placeholder={"Password"}
              width={"70%"}
              height={"4rem"}
              boxShadow={"1px 1px 13px 0px rgba(0, 0, 0, 0.25)"}
              value={formData.password}
              onChange={handleChange}
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
              onClick={() => navigate("/home")}
              v
            >
              SIGNUP
            </Button>
            <ParaText>
              Already have an Account? <span onClick={handleClick}> Login</span>
            </ParaText>
          </DesktopSignupForm>
        </SignupRightSide>
        <WrapperRightSide />
      </DesktopSignupWrapper>
    </>
  );
};
export default DesktopSignup;

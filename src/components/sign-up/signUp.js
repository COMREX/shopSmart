import React, { useState } from "react";

import {
  SignupForm,
  AuthMethods,
  SignupIcons,
  SignupWrapper,
  Text,
} from "./signUp.styles";
import AuthRectangle from "../utils/auth-rectangle/authRectangle";
import Input from "../utils/input/input";
import google from "../../Assets/svgs/google.svg";
import facebook from "../../Assets/svgs/fb.svg";
import twitter from "../../Assets/svgs/twitter.svg";
import Button from "../utils/button/button";

const SignUp = ({ handleClick }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormData("");
  };

  return (
    <SignupWrapper>
      <AuthRectangle
        heading="Register your Account"
        paragraph="Fill in the form below correctly"
      />
      <SignupForm>
        <Input
          type={"text"}
          placeholder={"Full Name"}
          required
          InputBg={`${(props) => props.color.semiwhite}`}
          value={formData.fullname}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          placeholder={"Username"}
          required
          InputBg={`${(props) => props.color.semiwhite}`}
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          type={"email"}
          placeholder={"Email"}
          required
          InputBg={`${(props) => props.color.semiwhite}`}
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          required
          InputBg={`${(props) => props.color.semiwhite}`}
          value={formData.password}
          onChange={handleChange}
        />
        <AuthMethods>
          <Text>Sign Up with</Text>
          <SignupIcons>
            <img src={google} alt={""} />
            <img src={facebook} alt={""} />
            <img src={twitter} alt={""} />
          </SignupIcons>
          <Button
            activeColor={"#000"}
            width={"11rem"}
            height={"5rem"}
            bg={(props) => props.theme.color.primary}
            color={(props) => props.theme.color.white}
          >
            Sign Up
          </Button>
          <Text>
            Already have an Account?
            <span onClick={handleClick}>Sign In</span>
          </Text>
        </AuthMethods>
      </SignupForm>
    </SignupWrapper>
  );
};

export default SignUp;

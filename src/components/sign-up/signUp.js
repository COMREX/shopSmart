import React, { useState } from "react";

import {
  SignupForm,
  AuthMethods,
  SignupIcons,
  SignupWrapper,
  Text,
  SignupInput,
} from "./signUp.styles";
import AuthHeader from "../utils/auth-header/authHeader";
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
      <AuthHeader
        heading="Register your Account"
        paragraph="Fill in the form below correctly"
      />
      <SignupForm>
        <SignupInput
          type={"text"}
          placeholder={"Full Name"}
          required
          value={formData.fullname}
          onChange={handleChange}
        />
        <SignupInput
          type={"text"}
          placeholder={"Username"}
          required
          value={formData.username}
          onChange={handleChange}
        />
        <SignupInput
          type={"email"}
          placeholder={"Email"}
          required
          value={formData.email}
          onChange={handleChange}
        />
        <SignupInput
          type={"password"}
          placeholder={"Password"}
          required
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
            width="9rem"
            height="4.5rem"
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

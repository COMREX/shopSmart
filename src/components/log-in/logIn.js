import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormText, LoginWrapper } from "./logIn.styles";
import AuthHeader from "../utils/auth-header/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";

const Login = ({ handleClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
      <LoginWrapper>
        <AuthHeader
          heading={"Welcome to ShopSmart"}
          paragraph={"Fill Login form below correctly"}
          headerBg={"rgba(6, 145, 154, 0.38)"}
        />
        <Form>
          <Input
            type="text"
            name="username"
            InputBg={"rgba(255, 255, 255)"}
            required
            width={"70%"}
            height={"4.5rem"}
            value={formData.username}
            placeholder={"Username"}
            onChange={handleChange}
          />
          <Input
            type="email"
            InputBg={"rgba(255, 255, 255)"}
            required
            width={"70%"}
            height={"4.5rem"}
            value={formData.email}
            placeholder={"Email"}
            onChange={handleChange}
          />
          <Button
            bg={(props) => props.theme.color.primary}
            width="9rem"
            height="4.5rem"
            onClick={() => navigate("/home")}
            color={(props) => props.theme.color.white}
            active
          >
            Login
          </Button>
          <FormText>
            You don’t have any account? &nbsp;
            <span onClick={handleClick}>Sign Up</span>
          </FormText>
        </Form>
      </LoginWrapper>
    </>
  );
};

export default Login;

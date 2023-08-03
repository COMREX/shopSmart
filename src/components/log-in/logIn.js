import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormText, LoginWrapper } from "./logIn.styles";
import AuthRectangle from "../utils/auth-rectangle/authRectangle";
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
        <AuthRectangle
          heading={"Welcome to ShopSmart"}
          paragraph={"Fill Login form below correctly"}
        />
        <Form>
          <Input
            type="text"
            name="username"
            InputBg={"rgba(255, 255, 255)"}
            required
            value={formData.username}
            placeholder={"Username"}
            onChange={handleChange}
          />
          <Input
            type="email"
            InputBg={"rgba(255, 255, 255)"}
            required
            value={formData.email}
            placeholder={"Email"}
            onChange={handleChange}
          />
          <Button
            bg={(props) => props.theme.color.primary}
            width={"11rem"}
            height={"5rem"}
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

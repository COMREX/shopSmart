import React from "react";
import {
  Buttons,
  DesktopCustomerWrapper,
  HeadingText,
  Para,
  ParaText,
  CustomerMainWrapper,
} from "./desktopCustomerContact.styles";
import Input from "../utils/input/input";
import TextArea from "../utils/text-area/textArea";
import Button from "../utils/button/button";
import Header from "../utils/header/header";
import { useNavigate } from "react-router-dom";
const DesktopCustomerContact = ({
  isSubmitButtonDisabled,
  handleChange,
  handleSubmit,
  formData,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <CustomerMainWrapper>
        {/* <Header /> */}
        <DesktopCustomerWrapper>
          <HeadingText>Give Your FeedBack Here</HeadingText>
          <Input
            type={"text"}
            placeholder={"Title"}
            name={"title"}
            value={formData.title}
            required
            onChange={handleChange}
            InputBg="#FFFFFF"
            width={"70%"}
            height={"4rem"}
            boxShadow={"2px 2px 15px 0px rgba(0, 0, 0, 0.25)"}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            onChange={handleChange}
            value={formData.email}
            required
            InputBg="#FFFFFF"
            width={"70%"}
            height={"4rem"}
            boxShadow={"2px 2px 15px 0px rgba(0, 0, 0, 0.25)"}
          />
          <TextArea
            placeholder={"Type here ..."}
            value={formData.message}
            onChange={handleChange}
            name={"message"}
            TextBg={"#FFFFFF"}
            width={"70%"}
            height={"16rem"}
            boxShadow={"2px 2px 15px 0px rgba(0, 0, 0, 0.25)"}
          />
          <Buttons>
            <Button
              width={"11rem"}
              height={"5rem"}
              bg={(props) => props.theme.color.secondary}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              bg={(props) =>
                props.disabled
                  ? props.theme.color.primaryDisabled
                  : props.theme.color.primary
              }
              disabled={isSubmitButtonDisabled}
              width={"11rem"}
              height={"5rem"}
              onClick={() => navigate("/home")}
              color={"white"}
            >
              Send
            </Button>
          </Buttons>
          <ParaText>
            <Para>Help- Line</Para>
            <Para>012-34567</Para>
          </ParaText>
        </DesktopCustomerWrapper>
      </CustomerMainWrapper>
    </>
  );
};

export default DesktopCustomerContact;

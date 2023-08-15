import React, { useState } from "react";
import Button from "../components/utils/button/button";
import Navigation from "../components/utils/navigation/navigation";
import TextArea from "../components/utils/text-area/textArea";
import Input from "../components/utils/input/input";
import {
  Buttons,
  DesktopViewCustomerContact,
  Form,
  ParagraphText,
  TextPara,
  CustomerContactWrapper,
} from "./styles/customerContact.styles";
import { useNavigate } from "react-router-dom";
import DesktopCustomerContact from "../components/desktop-customer-contact/desktopCustomerContact";
import useScreenWidth from "../components/utils/use-screen-width/useScreenWidth";

const CustomerContact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    message: "",
  });
  const screenWidth = useScreenWidth();

  const { title, email, message } = formData;
  const isSubmitButtonDisabled = !(
    title.trim() &&
    email.trim() &&
    message.trim()
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {screenWidth <= 768 ? (
        <CustomerContactWrapper>
          <Form onSubmit={handleSubmit}>
            <ParagraphText>Give Feedback or Contact with Us</ParagraphText>
            <Input
              type="text"
              name="title"
              InputBg={(props) => props.theme.color.secondary}
              value={title}
              width={"70%"}
              height={"4.5rem"}
              onChange={handleChange}
              placeholder="Title ..."
            />
            <Input
              type="text"
              name="email"
              value={email}
              width={"70%"}
              height={"4.5rem"}
              InputBg={(props) => props.theme.color.secondary}
              onChange={handleChange}
              placeholder="Email"
            />
            <TextArea
              placeholder="Type here ..."
              name="message"
              width="70%"
              height="12rem"
              TextBg={(props) => props.theme.color.secondary}
              value={message}
              onChange={handleChange}
            />
            <Buttons>
              <Button
                onClick={() => navigate(-1)}
                activeColor
                color={(props) => props.theme.color.black}
                bg={(props) => props.theme.color.secondarys}
                width="9rem"
                height="4.5rem"
              >
                Cancel
              </Button>

              <Button
                bg={(props) =>
                  props.disabled
                    ? props.theme.color.primaryDisabled
                    : props.theme.color.primary
                }
                color={(props) => props.theme.color.white}
                disabled={isSubmitButtonDisabled}
                type="submit"
                onClick={handleSubmit}
                width={"9rem"}
                height={"4.5rem"}
              >
                Send
              </Button>
            </Buttons>
            <TextPara>
              <p>HelpLine</p>
              <p>051 - 5467891</p>
            </TextPara>
          </Form>
          <Navigation />
        </CustomerContactWrapper>
      ) : (
        <DesktopViewCustomerContact>
          <DesktopCustomerContact
            isSubmitButtonDisabled={isSubmitButtonDisabled}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </DesktopViewCustomerContact>
      )}
    </>
  );
};

export default CustomerContact;

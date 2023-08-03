import React from "react";
import {
  HeadingText,
  ParaText,
  RectangleContent,
  RectangleWrapper,
  SvgImage,
} from "./authRectangle.styles";
import cartIcon from "../../../Assets/svgs/Group.svg";
import logo from "../../../Assets/svgs/logo.svg";
const AuthRectangle = ({ heading, paragraph }) => {
  return (
    <RectangleWrapper>
      <RectangleContent>
        <img src={logo} alt="" />
        <HeadingText>{heading}</HeadingText>
        <ParaText>{paragraph}</ParaText>
      </RectangleContent>
      <SvgImage>
        <img src={cartIcon} alt="cart" />
      </SvgImage>
    </RectangleWrapper>
  );
};

export default AuthRectangle;

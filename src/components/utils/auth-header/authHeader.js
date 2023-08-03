import React from "react";
import {
  HeadingText,
  ParaText,
  HeaderContent,
  HeaderWrapper,
  SvgImage,
} from "./authHeader.styles";
import cartIcon from "../../../Assets/svgs/Group.svg";
import logo from "../../../Assets/svgs/logo.svg";
const AuthHeader = ({ heading, paragraph }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src={logo} alt="" />
        <HeadingText>{heading}</HeadingText>
        <ParaText>{paragraph}</ParaText>
      </HeaderContent>
      <SvgImage>
        <img src={cartIcon} alt="cart" />
      </SvgImage>
    </HeaderWrapper>
  );
};

export default AuthHeader;

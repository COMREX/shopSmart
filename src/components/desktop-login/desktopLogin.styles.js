import { styled } from "styled-components";
import sideImage from "../../Assets/images/desktop-login-page.png";

export const SigninWrapper = styled.div``;
export const DesktopLoginWrapper = styled.div`
  width: 72rem;
  height: 51rem;
  display: flex;
  overflow: hidden;
`;

export const DesktopLoginForm = styled.form`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const LoginIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const ParaText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  span {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
`;
export const CrossIcon = styled.img`
  float: right;
  padding: 1rem;
  cursor: pointer;
`;
export const WrapperRightSide = styled.div`
  width: 50%;
  background-image: url(${sideImage});
  object-fit: cover;
`;

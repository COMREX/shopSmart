import { styled } from "styled-components";
import sideImage from "../../Assets/images/desktop-login-page.png";

export const SigninWrapper = styled.div`
  width: 50%;
`;
export const DesktopLoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const DesktopLoginForm = styled.form`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
export const LoginIcons = styled.div`
  display: flex;
  gap: 1rem;
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
  @media (max-height: calc(${(props) => props.theme.breakpoints.sm} + 100px)) {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-height: ${(props) => props.theme.breakpoints.sm}) {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

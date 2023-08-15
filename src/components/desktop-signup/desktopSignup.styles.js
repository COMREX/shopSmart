import { styled } from "styled-components";
import sideImage from "../../Assets/images/desktop-login-page.png";

export const DesktopSignupWrapper = styled.div`
  width: 72rem;
  height: 51rem;
  background-color: #fafefe;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignupRightSide = styled.div`
  width: 50%;
  height: 100%;
`;
export const SignupLeftSide = styled.div`
  width: 50%;
  height: 100%;

  background-image: url(${sideImage});
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const DesktopSignupForm = styled.form`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-height: calc(${(props) => props.theme.breakpoints.sm} + 100px)) {
    padding-top: 1rem;
    gap: 0.7rem;
  }
  @media (max-height: ${(props) => props.theme.breakpoints.sm}) {
    padding-top: 0.5rem;
    gap: 0.4rem;
  }
`;
export const SignupIcons = styled.div`
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
  height: 100%;
  background-image: url(${sideImage});
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

import { styled } from "styled-components";
import sideImage from "../../Assets/images/desktop-login-page.png";

export const DesktopSignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafefe;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignupRightSide = styled.div`
  width: 50%;
  height: 100%;
`;

export const DesktopSignupForm = styled.form`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const SignupIcons = styled.div`
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
  height: 100%;
  background-image: url(${sideImage});
`;

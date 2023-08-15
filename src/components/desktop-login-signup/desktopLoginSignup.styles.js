import { styled } from "styled-components";

export const DesktopLoginSignupWrapper = styled.div`
  width: 50%;
  height: 51rem;
  background-color: #fafefe;
  display: flex;
  justify-content: center;
  border: 0.2rem solid rgba(6, 145, 154, 0.8);
  overflow: hidden;
  position: relative;
  @media (max-height: calc(${(props) => props.theme.breakpoints.sm} + 100px)) {
    height: 48rem;
  }
  @media (max-height: ${(props) => props.theme.breakpoints.sm}) {
    height: 45rem;
  }
  @media (max-height: calc(${(props) => props.theme.breakpoints.sm} - 40px)) {
    height: 42rem;
  }
`;
export const CancelWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
export const WrapperLeftSide = styled.div`
  width: 100%;
`;

export const AuthMainContainer = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  overflow: hidden;
  transform: translateX(${(props) => (props.isLoginVisible ? "0" : "-50%")});
  transition: transform 0.5s;
`;

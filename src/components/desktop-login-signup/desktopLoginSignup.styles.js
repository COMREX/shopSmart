import { styled } from "styled-components";

export const DesktopLoginSignupWrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fafefe;
  display: flex;
  justify-content: center;
  border: 0.2rem solid rgba(6, 145, 154, 0.8);
  overflow: hidden;
  position: relative;
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

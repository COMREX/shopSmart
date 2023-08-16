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
export const CancelWrapper = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  box-shadow: 1px 1px 13px 0px rgba(0, 0, 0, 0.25);
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

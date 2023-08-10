import { styled } from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  width: 200%;
  height: 100vh;
  overflow: hidden;
  transform: translateX(${(props) => (props.isLoginVisible ? "0" : "-50%")});
  transition: transform 0.5s;
`;
export const MainAuthContainer = styled.div`
  overflow: hidden;
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`;
export const DestopView = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

import { styled } from "styled-components";

export const NavWrapper = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
  border-top-left-radius: ${(props) => props.theme.spacing.lg};
  border-top-right-radius: ${(props) => props.theme.spacing.lg};
  position: fixed;
  bottom: 0;
  z-index: 999;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

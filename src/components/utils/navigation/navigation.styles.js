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

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: calc(${({ theme }) => theme.spacing.xs} + 0.4rem)
      calc(${({ theme }) => theme.spacing.xl} - 1rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    display: none;
  }
`;

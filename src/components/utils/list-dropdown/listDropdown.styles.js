import { styled } from "styled-components";

export const DropdownWrapper = styled.div`
  height: 7.5rem;
  width: 5.5rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 15%;
  left: 81%;
  z-index: 999;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

export const UList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: calc(${({ theme }) => theme.spacing.xs} + 0.2rem)
    calc(${({ theme }) => theme.spacing.xxs} + 0.1rem);
  height: inherit;
`;

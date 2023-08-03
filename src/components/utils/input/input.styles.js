import { styled } from "styled-components";

export const InputWrapper = styled.input`
  width: 70%;
  height: 5rem;
  padding: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  background-color: ${(props) => props.InputBg};
  color: ${(props) => props.theme.color.gray};
  border-radius: ${({ theme }) => theme.spacing.xs};
  border: none;
  outline: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.color.primary};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 90%;
    height: 4rem;
  }
  @media (max-height: 670px) {
    width: 40%;
    height: 4rem;
  }
  @media (max-height: 430px) {
    width: 40%;
    height: 3rem;
    font-size: ${(props) => props.theme.typography.fontSize.xs};
  }
`;

import { styled } from "styled-components";

export const InputWrapper = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
`;

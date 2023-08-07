import { styled } from "styled-components";

export const TextAreaWrapper = styled.textarea`
  width: 70%;
  height: 10rem;
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  border-radius: ${(props) => props.theme.spacing.xs};
  background: ${(props) => props.theme.color.secondary};
  padding: ${(props) => props.theme.spacing.sm};
  outline: none;
  border: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.color.primary};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70%;
    height: 10rem;
  }
`;

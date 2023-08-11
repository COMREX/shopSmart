import { styled } from "styled-components";

export const TextAreaWrapper = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  border-radius: ${(props) => props.theme.spacing.xs};
  background: ${(props) => props.TextBg};
  padding: ${(props) => props.theme.spacing.sm};
  box-shadow: ${(props) => props.boxShadow};
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

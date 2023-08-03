import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bg};
  border: none;
  outline: none;
  white-space: nowrap;
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  font-size: ${(props) => props.theme.typography.fontSize.md};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeight.Regular};
  height: calc(${(props) => props.theme.spacing.xl} + 1rem);
  border-radius: ${(props) => props.borderRadius || "0.4rem"};
  width: calc(${(props) => props.theme.spacing.xxl} + 4rem);
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: ${(props) => props.theme.typography.fontSize.xs};
    width: ${(props) => props.theme.spacing.xxl};
    height: ${(props) => props.theme.spacing.xl};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: calc(${(props) => props.theme.spacing.xxl} + 2rem);
    height: ${(props) => props.theme.spacing.xl};
  }
  @media (max-height: 430px) {
    width: ${(props) => props.theme.spacing.xxl};
    height: calc(${(props) => props.theme.spacing.xl} - 1rem);
    font-size: ${(props) => props.theme.typography.fontSize.xs};
  }
`;

import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(${({ theme }) => theme.spacing.md} + 0.4rem);
  padding-right: calc(${({ theme }) => theme.spacing.sm} + 0.4rem);
  height: 7.5rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
`;

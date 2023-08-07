import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 60%;
  height: calc(${({ theme }) => theme.spacing.lg} + 0.5rem);
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: calc(${({ theme }) => theme.spacing.xxs} + 0.1rem);
  gap: calc(${({ theme }) => theme.spacing.sm} - 0.2rem);
  display: flex;
  align-items: center;
  @media (max-width: 310px) {
    gap: calc(${({ theme }) => theme.spacing.xs});
  }
`;
export const SearchInputStyled = styled.input`
  color: ${({ theme }) => theme.color.gray};
  width: 80%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.regular};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  border-radius: calc(${({ theme }) => theme.spacing.xxs} + 0.1rem);
  line-height: normal;
  border: none;
  outline: none;
  padding-right: 1rem;
  @media (max-width: 620px) {
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
  @media (max-width: 427px) {
    width: 65%;
  }
`;

export const SearchIconStyled = styled.img`
  padding-left: ${({ theme }) => theme.spacing.sm};
  @media (max-width: 375px) {
    padding-left: ${({ theme }) => theme.spacing.xs};
    width: 22px;
    height: 22px;
  }
`;

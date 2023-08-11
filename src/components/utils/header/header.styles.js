import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 7.5rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 5rem;
  }
`;

export const HeaderSVG = styled.svg`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 78px;
    height: 56px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

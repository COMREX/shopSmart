import { styled } from "styled-components";

export const ShopSmartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ShopSmartStyled = styled.h3`
  color: ${(props) => props.theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: calc(${({ theme }) => theme.typography.fontWeight.bold});
  font-size: calc(${({ theme }) => theme.typography.fontSize.sm} + 0.2rem);
  font-style: normal;
  line-height: normal;
  @media (min-width: 413px) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

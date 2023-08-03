import { styled } from "styled-components";
export const Wrapper = styled.div`
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
export const QRcodeStyled = styled.img`
  width: 12.7rem;
  height: 12.7rem;
  @media (min-width: 413px) {
    /* width: calc(${({ theme }) => theme.spacing.xxl} + 6.3rem); */
    width: 13.7rem;
    height: 13.7rem;
  }
`;

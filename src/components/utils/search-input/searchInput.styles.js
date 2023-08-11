import { styled } from "styled-components";

export const SearchInputWrapper = styled.div`
  width: ${(props) => props.width || "80%"};
  height: calc(${({ theme }) => theme.spacing.lg} + 0.5rem);
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.color.secondary};
  border-radius: calc(
    ${({ theme, borderRadius }) => borderRadius || theme.spacing.xxs} + 0.1rem
  );
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "2px 2px 15px 0px rgba(0, 0, 0, 0.25)"};
  /* gap: calc(${({ theme }) => theme.spacing.sm} - 0.2rem); */
  /* gap: 2.5rem; */
  gap: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    gap: calc(${({ theme }) => theme.spacing.xs});
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    /* gap: calc(${({ theme }) => theme.spacing.xl} - 0.8rem); */
    border-radius: calc(${({ theme }) => theme.spacing.md} - 0.2rem);
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor || theme.color.white};
    box-shadow: ${({ boxShadow }) => boxShadow || "none"};
    /* box-shadow: ${({ boxShadow }) =>
      boxShadow || "2px 2px 15px 0px rgba(0, 0, 0, 0.25)"}; */
    border-radius: calc(
      ${({ theme, borderRadius }) => borderRadius || theme.spacing.xxs} + 0.1rem
    );
  }
`;

export const SearchInputStyled = styled.input`
  color: ${({ theme }) => theme.color.gray};
  /* width: 100%; */
  width: ${(props) => props.width || "100%"};
  /* width: 90%; */

  height: 100%;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.color.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius || theme.spacing.xxl};
  border: none;
  outline: none;
<<<<<<< HEAD
  padding-right: 1rem;
  @media (max-width: 620px) {
=======
  padding: 1rem;
  /* @media (max-width: 620px) {
>>>>>>> a3ef60410eda20a1c82eb8b300688a5f5354c6a0
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
  @media (max-width: 427px) {
    width: 65%;
  } */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    /* padding-right: 2rem; */
    /* width: ${(props) => props.width || "90%"}; */

    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor || theme.color.white};
    border-radius: calc(
      ${({ theme, borderRadius }) => borderRadius || theme.spacing.xxl} + 0.2rem
    );
  }
`;

export const SearchIconStyled = styled.svg`
  /* padding-left: ${({ theme }) => theme.spacing.sm}; */
  /* padding: 1rem; */
  margin-left: 1.7rem;
  fill: white;
  height: 2.2rem;
  width: 2.2rem;
  @media (max-width: 375px) {
    /* padding-left: ${({ theme }) => theme.spacing.xs}; */
    width: 2rem;
    height: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    /* padding-left: ${({ theme }) => theme.spacing.md}; */
    fill: ${({ theme }) => theme.color.gray};
    /* height: 43px;
    width: 43px; */
  }
`;
export const stylesoflist = styled.div``;

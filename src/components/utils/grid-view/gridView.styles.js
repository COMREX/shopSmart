import { styled } from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  /* column-gap: 3rem; */
  padding: 0 calc(${({ theme }) => theme.spacing.lg} + 0.3rem);
  /* height: ${({ height }) => height || "auto"}; */
  height: calc(90vh - 200px);
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    column-gap: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 6.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 70vh;
    column-gap: 10rem;
    /* gap: 3rem; */
  }
`;

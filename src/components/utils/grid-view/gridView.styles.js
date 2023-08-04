import { styled } from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 3rem;
  padding: 0 calc(${({ theme }) => theme.spacing.lg} + 0.3rem);
  height: ${({ height }) => height || "auto"};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  overflow: auto;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.xs} + 40px)) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    column-gap: 5rem;
  }
`;

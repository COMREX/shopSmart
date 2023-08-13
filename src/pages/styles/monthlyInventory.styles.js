import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 auto calc(${({ theme }) => theme.spacing.lg} + 0.8rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 80%;
    row-gap: 2rem;
  }
`;

import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemName = styled.p`
  font-size: calc(${({ theme }) => theme.typography.fontSize.sm} + 0.2rem);
  color: ${({ theme }) => theme.color.primary};
  margin: calc(${({ theme }) => theme.spacing.sm} - 0.1rem) 0;
  font-weight: calc(${({ theme }) => theme.typography.fontWeight.bold} - 100);

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

export const ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  border: 0.4rem solid ${({ theme }) => theme.color.primary};
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.xs} + 50px)) {
    width: 12.5rem;
    height: 12.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 10rem;
    height: 10rem;
  }
`;

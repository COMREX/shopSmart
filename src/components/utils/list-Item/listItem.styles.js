import { styled } from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(${({ theme }) => theme.spacing.xs} + 0.2rem);
  width: auto;
  width: 80%;
  min-height: 7rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.secondary};
  position: relative;
`;

export const GapCotainer = styled.div`
  display: flex;
  gap: calc(${({ theme }) => theme.spacing.sm} + 0.4rem);
  align-items: center;
`;
export const CoverImageWrapper = styled.div`
  height: 6rem;
  width: 6.3rem;
  border: 0.2rem solid ${({ theme }) => theme.color.primary};
  border-radius: 0.8rem;
  background-image: ${({ cover }) => `url(${cover})`};
  background-size: cover;
  background-position: center;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: ${({ theme }) => theme.color.primary};
  height: 5rem;
`;

export const Para = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xxs};
`;

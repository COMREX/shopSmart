import { styled } from "styled-components";

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(${({ theme }) => theme.spacing.xs} + 0.2rem);
  width: 80%;
  min-height: 7rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.secondary};
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const MobileIcon = styled.img`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
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

export const DesktopIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;

  img {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const GapCotainer = styled.div`
  display: flex;
  gap: calc(${({ theme }) => theme.spacing.sm} + 0.4rem);
  align-items: center;
`;

export const Para = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xxs};
`;

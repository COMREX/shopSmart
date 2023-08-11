import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 21.4rem;
  width: 20rem;
  margin-bottom: calc(${({ theme }) => theme.spacing.sm} + 0.2rem);
  text-align: center;
  cursor: pointer;
`;

export const BackgroundWrapper = styled.div`
  height: 90%;
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.25);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 90%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.8rem;

    h4 {
      font-weight: 600;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 56%;
  height: 60%;
  /* min-height: 53.27%; */
  border-radius: 0.8rem;
  background-image: ${({ cover }) => `url(${cover})`};
  background-position: center;
  background-size: cover;
  border: 0.2rem solid ${({ theme }) => theme.color.primary};
`;

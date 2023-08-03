import { styled } from "styled-components";

export const OffersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 34rem;
  max-height: 8.7rem;
  background-color: ${(props) => props.theme.color.primary};
  margin: 0 auto;
  border-radius: 0.5rem;

  &:hover {
    background-color: transparent;
  }
`;

export const Image = styled.img`
  max-width: 27.6rem;
`;

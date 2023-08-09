import { styled } from "styled-components";

export const DesktopCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
export const HeadingText = styled.h6`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary};
`;
export const Buttons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ParaText = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Para = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

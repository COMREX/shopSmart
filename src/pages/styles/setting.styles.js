import { styled } from "styled-components";

export const MainWrapper = styled.div`
  width: 29.5rem;
  z-index: 10;
  height: 100vh;
  border-radius: 0.5rem;
  background: white;
  position: absolute;
  top: 0;
  left: ${(props) => (props.showSetting ? 0 : "-300px")};
  transition: left 0.3s ease-in-out;

  @media (max-width: 340px) {
    width: 26.5rem;
  }
  @media (max-width: 310px) {
    width: 23.5rem;
  }
`;

export const HeadingWrapper = styled.h3`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.3rem;
  margin-bottom: 1.7rem;
`;

export const ShopSmartWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Heading = styled.h3`
  color: #000;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2rem;
  margin-left: 3rem;
`;
export const Paragraph = styled.p`
  color: #000;
  margin-left: 3rem;

  font-size: 1.8rem;
  margin-bottom: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

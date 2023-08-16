import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height || "20rem"};
  border-radius: 0rem 0rem 6rem 6rem;
  background: ${(props) => props.headerBg};
  display: flex;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.spacing.lg};
  padding-right: ${(props) => props.theme.spacing.xs};
  align-items: center;
  @media (max-height: 490px) {
    height: 16rem;
  }
  @media (max-height: 440px) {
    height: 12rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  @media (max-height: 440px) {
    gap: 0.5rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xxxl}) {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  @media (max-width: 2560px) {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
`;
export const HeadingText = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 1.8rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    font-size: 2rem;
  }
`;
export const ParaText = styled.p`
  color: ${(props) => props.theme.color.semiWhite};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.xxs};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: calc(${(props) => props.theme.typography.fontSize.xs} - 0.4rem);
  }
`;
export const SvgImage = styled.div`
  margin-top: 7rem;
  img {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    margin-top: 5rem;
    img {
      width: 8rem;
      height: 8rem;
    }
  }
  @media (max-height: 490px) {
    margin-top: 3rem;
    img {
      width: 8rem;
      height: 8rem;
    }
  }
  @media (max-height: 440px) {
    margin-top: 1rem;
    img {
      width: 7rem;
      height: 7rem;
    }
  }
`;

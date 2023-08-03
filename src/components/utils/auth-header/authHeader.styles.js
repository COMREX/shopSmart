import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 20rem;
  border-radius: 0rem 0rem 6rem 6rem;
  background: rgba(6, 145, 154, 0.38);
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
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 6rem;
    height: 6rem;
  }
  @media (max-height: 440px) {
    gap: 0.5rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;
export const HeadingText = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 1.8rem;
  }
`;
export const ParaText = styled.p`
  color: ${(props) => props.theme.color.semiWhite};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.xs};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
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

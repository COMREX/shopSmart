import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  gap: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 2rem 2rem;
    gap: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

export const Buttons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 90%;
    padding-top: ${(props) => props.theme.spacing.sm};
  }
`;

export const TextPara = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-top: ${(props) => props.theme.spacing.lg};
    padding-bottom: ${(props) => props.theme.spacing.lg};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 90%;
  }

  p {
    color: ${(props) => props.theme.color.black};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.fontSize.sm};
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    line-height: normal;
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: ${(props) => props.theme.typography.fontSize.xxs};
    }
  }
`;

export const ParagraphText = styled.div`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: calc(${(props) => props.theme.typography.fontSize.md} - 0.2rem);
  font-style: normal;
  font-weight: calc(${(props) => props.theme.typography.fontWeight.bold});
  padding-bottom: ${(props) => props.theme.spacing.xl};
  padding-top: ${(props) => props.theme.spacing.xl};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-top: ${(props) => props.theme.spacing.sm};
    padding-bottom: ${(props) => props.theme.spacing.sm};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding-top: ${(props) => props.theme.spacing.sm};
    padding-bottom: ${(props) => props.theme.spacing.sm};

    font-size: calc(${(props) => props.theme.typography.fontSize.sm} - 0.2rem);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    padding-bottom: ${(props) => props.theme.spacing.xxs};
    padding-top: ${(props) => props.theme.spacing.xxs};

    font-size: ${(props) => props.theme.typography.fontSize.xxs};
  }
`;

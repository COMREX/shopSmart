import { styled } from "styled-components";
import background from "../../Assets/images/home-bg.jpg";
export const SignupWrapper = styled.div`
  background-image: url(${background});
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  overflow-y: hidden;
  width: 50%;
  overflow: hidden;
`;
export const Text = styled.h6`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.xs};
  font-weight: calc(${(props) => props.theme.typography.fontWeight.bold} - 100);
  span {
    color: ${(props) => props.theme.color.semiWhite};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: ${(props) => props.theme.typography.fontSize.xxs};
  }
`;
export const SignupIcons = styled.div`
  @media (max-height: 430px) {
    img {
      width: 3rem;
    }
  }
`;
export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding-top: 5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1.5rem;
    padding-top: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    gap: 1rem;
    padding-top: 1.5rem;
  }
  @media (max-height: 775px) {
    gap: 1.5rem;
    padding-top: 3rem;
  }
  @media (max-height: 670px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media (max-height: 430px) {
    gap: 0.5rem;
    padding-top: 1rem;
  }
`;
export const AuthMethods = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-height: 430px) {
    gap: 0.5rem;
  }
`;

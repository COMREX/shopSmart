import { styled } from "styled-components";
import background from "../../Assets/images/desktop-landing-background.png";
export const LandingWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 10vh;
`;
export const LandingWrapperOpacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.56);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10rem;
  overflow: hidden;
`;
export const AuthContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.6rem;
`;
export const LandingHeading = styled.div`
  font-size: 4.4rem;
  font-weight: 700;
  color: #fff;
`;
export const LandingParagraph = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const StepperDotsMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 5rem;
`;
export const StepperDots = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 3px solid #fff;
`;

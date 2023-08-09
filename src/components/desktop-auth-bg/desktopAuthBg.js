import React, { useState } from "react";
import {
  LandingWrapper,
  LandingWrapperOpacity,
  AuthContentWrapper,
  LandingHeading,
  LandingParagraph,
  StepperDots,
  StepperDotsMain,
} from "./desktopAuthBg.styles";
import Button from "../utils/button/button";
import DesktopLoginSignup from "../desktop-login-signup/desktopLoginSignup";

const DesktopAuthBg = () => {
  const [toggle, setToggle] = useState(false);
  const handleCross = () => {
    setToggle(false);
  };
  return (
    <LandingWrapper>
      <LandingWrapperOpacity>
        <AuthContentWrapper>
          {toggle ? (
            <div style={{ width: "100%", height: "100%" }}>
              <DesktopLoginSignup handleCross={handleCross} />
            </div>
          ) : (
            <>
              <LandingHeading>Welcome to ShopSmart</LandingHeading>
              <LandingParagraph>
                Lorem ipsum dolor sit amet consecteturadipisicing elit.
                <br />
                Maximemollitia, quas vel sint commodi repudiandae <br />
                consequuntur voluptatum laborum laborum <br />
                optio,
              </LandingParagraph>
              <Button
                width={"12rem"}
                height={"4rem"}
                fontSize={"1.4rem"}
                fontWeight={"700"}
                bg={"transparent"}
                color={"#fff"}
                borderRadius={"none"}
                border={"3px solid #06919A"}
                onClick={() => setToggle(true)}
              >
                CONTINUE
              </Button>

              <StepperDotsMain>
                <StepperDots />
                <StepperDots />
                <StepperDots />
              </StepperDotsMain>
            </>
          )}
        </AuthContentWrapper>
      </LandingWrapperOpacity>
    </LandingWrapper>
  );
};

export default DesktopAuthBg;

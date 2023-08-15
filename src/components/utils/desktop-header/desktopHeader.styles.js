import { styled } from "styled-components";

export const DesktopNavWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 10vh;
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10vh;
`;
export const DesktopContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.img`
  width: 8vw;
  height: 7vh;
`;

export const NavRightItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLinks = styled.ul`
  display: flex;
  gap: 35px;
  list-style: none;
`;

export const NavLI = styled.li`
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;
export const NavButton = styled.button`
  width: 5vw;
  height: 5vh;

  background-color: "#FAFEFE";
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.typography.fontSize.xxs};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  font-family: ${(props) => props.theme.typography.fontFamily};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const NavRightButtons = styled.div`
  display: flex;
  gap: 30px;
`;

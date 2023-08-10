import { styled } from "styled-components";

export const SidebarWrapper = styled.div`
  height: 100vh;
  width: 29.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;
export const SidebarLogo = styled.img`
  width: 6.6rem;
  height: 5.5rem;
  margin-top: 1.8rem;
`;

export const LogoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
  align-items: center;
  margin-bottom: 4rem;
`;
export const SidebarList = styled.div`
  height: 50vh;
  width: 100%;
  overflow: auto;
`;
export const HorizontalLine = styled.div`
  border-bottom: 0.5px solid #ccccccd9;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
`;
export const Li = styled.li`
  background-color: ${({ isActive }) => (isActive ? "skyblue" : "transparent")};
  padding-left: 1rem;
  width: 80%;
  height: 5.3rem;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.53);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-style: normal;
  font-weight: calc(${({ theme }) => theme.typography.fontWeight.medium} + 100);
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.6s ease-in-out;
  &:hover {
    background-color: skyblue;
  }
`;

export const SettingList = styled.div`
  margin-top: 0.7rem;
`;

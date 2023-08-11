import { styled } from "styled-components";

export const SidebarWrapper = styled.div`
  height: 90vh;
  width: 22vw;
  margin-top: 10vh;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
export const SidebarLogo = styled.img`
  width: 6.6rem;
  height: 5.5rem;
  margin-top: 1.8rem;
`;

export const LogoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  align-items: center;
  margin-bottom: 3rem;
`;
export const SidebarList = styled.div`
  height: 43vh;
  /* height: 26rem; */
  width: 100%;
  overflow: auto;
`;
export const HorizontalLine = styled.div`
  border-bottom: 0.5px solid #ccccccd9;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
`;
export const Li = styled.li`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.primaryDisabled : "transparent"};
  padding-left: 1rem;
  width: 80%;
  height: 5rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.53);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-style: normal;
  font-weight: calc(${({ theme }) => theme.typography.fontWeight.medium} + 100);
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: background-color 0.6s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDisabled};
  }
`;

export const SettingList = styled.div`
  margin-top: 0.7rem;
`;

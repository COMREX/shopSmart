import { styled } from "styled-components";

export const Overley = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  visibility: ${({ showSettings }) => (showSettings ? "visible" : "hidden")};
  background: rgba(1, 1, 1, 0.26);
`;

export const MainWrapper = styled.div`
  width: 29.5rem;
  z-index: 10;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: ${({ theme }) => theme.spacing.none};
  left: ${({ showSettings }) => (showSettings ? 0 : "-300px")};
  transition: left 0.3s ease-in-out;
  overflow: auto;
  /* @media (max-width: 768px) {
    width: 36.5rem;
  } */
  @media (max-width: 340px) {
    width: 26.5rem;
  }
  @media (max-width: 310px) {
    width: 23.5rem;
  }
`;
export const ShopSmartWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: calc(${({ theme }) => theme.spacing.lg} + 0.4rem);
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: calc(${({ theme }) => theme.spacing.lg} + 0.4rem);
`;

export const SettingsItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${({ theme }) => theme.spacing.sm} - 0.1rem);
`;

export const SettingsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(${({ theme }) => theme.spacing.sm} - 0.6rem);
  margin-left: calc(${({ theme }) => theme.spacing.md} + 0.5rem);
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: normal;
`;
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: calc(${({ theme }) => theme.typography.fontSize.sm} - 0.1rem);
  display: flex;
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: normal;
`;

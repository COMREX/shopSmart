import { styled } from "styled-components";

export const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(${({ theme }) => theme.spacing.sm} + 0.4rem);
  height: ${({ height }) => height || "auto"};
  overflow: auto;
  padding-bottom: 6.6rem;
  padding-top: 2rem;
`;

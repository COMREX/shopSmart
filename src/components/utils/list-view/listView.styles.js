import { styled } from "styled-components";

export const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(${({ theme }) => theme.spacing.sm} + 0.4rem);
  /* max-height: ${({ height }) => height || "auto"}; */
  max-height: calc(95vh - 150px);
  overflow: auto;
  padding-bottom: 6.6rem;
  padding-top: 2rem;
`;

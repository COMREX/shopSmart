import styled from "styled-components";

export const BarcodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  width: '150px',
  height: '150px'
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.color.primary};
`;

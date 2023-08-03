import { styled } from "styled-components";
export const QRcodeWrappr = styled.div`
  display: flex;
  justify-content: center;
`;
export const SearchInputWrappr = styled.div`
  width: 80%;
  display: flex;
  gap: calc(${(props) => props.theme.spacing.sm} + 0.4rem);
  justify-content: center;
`;
export const SearchInputWrapprForCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

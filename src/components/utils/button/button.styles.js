import { styled } from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border || "none"};
  outline: none;
  white-space: nowrap;
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
<<<<<<< HEAD

  font-size: ${(props) => props.theme.typography.fontSize.sm};
=======
  font-size: ${(props) => props.fontSize || props.theme.typography.fontSize.md};
>>>>>>> a3ef60410eda20a1c82eb8b300688a5f5354c6a0
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeight.Regular};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "0.4rem"};
  width: ${(props) => props.width};
`;

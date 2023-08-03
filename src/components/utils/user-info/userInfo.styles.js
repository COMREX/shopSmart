import { styled } from "styled-components";

export const UserInfOWrapper = styled.div`
  width: 24.2rem;
  height: 5rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AvatarName = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
export const UserInfAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
`;

export const UserName = styled.h3`
  color: rgba(0, 0, 0, 0.9);

  font-size: ${(props) => props.theme.typography.fontSize.sm};

  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

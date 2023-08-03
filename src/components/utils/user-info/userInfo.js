import {
  UserInfAvatar,
  UserInfOWrapper,
  UserName,
  AvatarName,
} from "./userInfo.styles";
import avatar from "../../../Assets/svgs/avatar.svg";
import Notify from "../../../Assets/svgs/notifiy-black.svg";
const UserInfo = () => {
  return (
    <UserInfOWrapper>
      <AvatarName>
        <UserInfAvatar src={avatar} alt="avatar" />
        <UserName>Mr. Anderson</UserName>
      </AvatarName>
      <img src={Notify} alt="notify" />
    </UserInfOWrapper>
  );
};

export default UserInfo;

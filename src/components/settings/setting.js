import SettingData from "../../DATA/SEETINGS-DATA";
import {
  Heading,
  Paragraph,
  ShopSmartWrap,
  MainWrapper,
  UserInfoWrapper,
  Overley,
  SettingsItemsWrapper,
  SettingsSectionWrapper,
} from "./setting.styles";
import ShopSmart from "../utils/shop-smart-logo/shopSmartLogo";
import UserInfo from "../utils/user-info/userInfo";
import { Link } from "react-router-dom";

const Setting = ({ showSettings }) => {
  return (
    <div>
      <Overley showSettings={showSettings} tabIndex={0} />
      <MainWrapper showSettings={showSettings}>
        <ShopSmartWrap>
          <ShopSmart />
        </ShopSmartWrap>
        <UserInfoWrapper>
          <UserInfo />
        </UserInfoWrapper>
        <SettingsItemsWrapper>
          {SettingData.map((item) => (
            <SettingsSectionWrapper>
              <Heading>{item.heading}</Heading>
              {item.options.map((option) => (
                <Link style={{ textDecoration: "none" }}>
                  <Paragraph>{option}</Paragraph>
                </Link>
              ))}
            </SettingsSectionWrapper>
          ))}
        </SettingsItemsWrapper>
      </MainWrapper>
    </div>
  );
};

export default Setting;

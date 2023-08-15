import {
  SidebarWrapper,
  SidebarLogo,
  LogoInputWrapper,
  SidebarList,
  Ul,
  Li,
  HorizontalLine,
  SettingList,
} from "./sidebar.styles";
import React, { useState } from "react";
import SidebarLogoSvg from "../../Assets/svgs/sidebar-logo.svg";
import SearchInput from "../utils/search-input/searchInput";
import SidebarData from "../../DATA/SIDEBAR_DATA";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(null);
  const handleItemClick = (id, path) => {
    setActiveId(id);
    navigate(path);
  };
  console.log(window.innerWidth);
  return (
    <SidebarWrapper>
      <LogoInputWrapper>
        <SidebarLogo src={SidebarLogoSvg} alt="logo" />
        <SearchInput
          borderRadius="0.2rem"
          backgroundColor={(props) => props.theme.color.secondary}
          placeholder="search here"
          boxShadow="none"
          gap="1.5rem"
        />
      </LogoInputWrapper>
      <SidebarList>
        {SidebarData.map((item) => (
          <Ul>
            <Li
              isActive={item.id === activeId}
              onClick={() => handleItemClick(item.id, item.path)}
              id={item.id}
            >
              {item.list}
            </Li>
          </Ul>
        ))}
      </SidebarList>
      <HorizontalLine />
      <SettingList>
        <Ul style={{ gap: "0.5rem" }}>
          <Li>Setting</Li>
          <Li>help</Li>
        </Ul>
      </SettingList>
    </SidebarWrapper>
  );
};

export default Sidebar;

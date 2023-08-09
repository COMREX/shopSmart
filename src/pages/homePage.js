import Header from "../components/utils/header/header";
import HomeItems from "../components/home-items/homeItems";
import Navigation from "../components/utils/navigation/navigation";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import DesktopHeader from "../components/utils/desktop-header/desktopHeader";
import { NavLI } from "../components/utils/desktop-header/desktopHeader.styles";

const HomePage = () => {
  return (
    <>
      <Header marginBottom="3rem" />
      {/* <DesktopHeader signin="SIGNIN" signout="SIGNOUT">
        <NavLI>HOME</NavLI>
        <NavLI>ABOUT</NavLI> 
        <NavLI>CONTACT</NavLI> 
      </DesktopHeader> */}
      <ShopSmartHeading marginBottom="1rem" />
      <HomeItems />
      <Navigation />
    </>
  );
};

export default HomePage;

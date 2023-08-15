import Header from "../components/utils/header/header";
import HomeItems from "../components/home-items/homeItems";
import Navigation from "../components/utils/navigation/navigation";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import DesktopHeader from "../components/utils/desktop-header/desktopHeader";
import { NavLI } from "../components/utils/desktop-header/desktopHeader.styles";

const HomePage = () => {
  const buttonitemss = [
    { key: 1, text: "Login" },
    { key: 1, text: "Login" },
  ];

  // const array = Array.from(buttonitems)
  return (
    <div>
      {/* <Header marginBottom="3rem" /> */}
      {/* <DesktopHeader /> */}

      <ShopSmartHeading marginBottom="1rem" />
      <HomeItems />
      <Navigation />
    </div>
  );
};

export default HomePage;

import Header from "../components/utils/header/header";
import HomeItems from "../components/home-items/homeItems";
import Navigation from "../components/utils/navigation/navigation";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";

const HomePage = () => {
  return (
    <>
      <Header marginBottom="3rem" />
      <ShopSmartHeading marginBottom="1rem" />
      <HomeItems />
      <Navigation />
    </>
  );
};

export default HomePage;

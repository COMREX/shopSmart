import Rectangle from "../components/utils/rectangle/rectangle";
import HomeItems from "../components/home-items/homeItems";
import SpecialOffers from "../components/utils/special-offers/specialOffers";
import Navigation from "../components/utils/navigation/navigation";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";

const HomePage = () => {
  return (
    <>
      <Rectangle marginBottom="3rem" />
      <ShopSmartHeading marginBottom="1rem" />
      <HomeItems paddingBottom="6.6rem" />
      {/* <SpecialOffers /> */}
      <Navigation />
    </>
  );
};

export default HomePage;

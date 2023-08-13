import DiscountPageItems from "../components/discount-grid-items/discoutPageItems";
import Navigation from "../components/utils/navigation/navigation";
import Header from "../components/utils/header/header";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";

const DiscountPage = () => {
  return (
    <div>
      {/* <Header marginBottom="3.5rem" /> */}
      <ShopSmartHeading marginBottom="1.3rem" />
      <DiscountPageItems />
      <Navigation />
    </div>
  );
};

export default DiscountPage;

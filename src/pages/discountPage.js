import DiscountPageItems from "../components/discount-grid-items/discoutPageItems";
import Navigation from "../components/utils/navigation/navigation";
import Rectangle from "../components/utils/rectangle/rectangle";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";

const DiscountPage = () => {
  return (
    <>
      <Rectangle marginBottom="3.5rem" />
      <ShopSmartHeading marginBottom="1.3rem" />
      <DiscountPageItems />
      <Navigation />
    </>
  );
};

export default DiscountPage;

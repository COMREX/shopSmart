import { ShopSmartWrapper } from "./shopSmartLogo.styles";
import ShopSmartImg from "../../../Assets/svgs/shopSmart.svg";

const ShopSmartLogo = () => {
  return (
    <ShopSmartWrapper>
      <img src={ShopSmartImg} alt="shopSmartLogo" />
    </ShopSmartWrapper>
  );
};

export default ShopSmartLogo;

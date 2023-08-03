import { ShopSmartStyled, ShopSmartWrapper } from "./shopSmartHeading.styles";
const ShopSmartHeading = ({ marginBottom }) => {
  return (
    <ShopSmartWrapper style={{ marginBottom }}>
      <ShopSmartStyled>ShopSmart</ShopSmartStyled>
    </ShopSmartWrapper>
  );
};

export default ShopSmartHeading;

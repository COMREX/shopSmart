import { OffersWrapper, Image } from "./specialOffers.styles";
import specialOffers from "../../../Assets/images/special-offers.png";

const SpecialOffers = ({ marginBottom }) => {
  return (
    <OffersWrapper marginBottom={marginBottom}>
      <Image src={specialOffers} alt="special offers" />
    </OffersWrapper>
  );
};

export default SpecialOffers;

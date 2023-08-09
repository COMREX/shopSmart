import StarsGenerator from "../stars-generator/starsGenerator";
import {
  ItemWrapper,
  BackgroundWrapper,
  ContentContainer,
  ImageContainer,
} from "./desktopHomeItem.styles";
import { useNavigate } from "react-router-dom";

const DesktopItem = ({ itemName, imgUrl, path, numberOfStars }) => {
  const navigate = useNavigate();
  return (
    <ItemWrapper onClick={() => navigate(`/${path}`)}>
      <BackgroundWrapper>
        <ContentContainer>
          <ImageContainer cover={imgUrl} />
          <h4>{itemName}</h4>
          <StarsGenerator numberOfStars={numberOfStars} />
        </ContentContainer>
      </BackgroundWrapper>
    </ItemWrapper>
  );
};

export default DesktopItem;

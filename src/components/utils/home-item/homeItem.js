import { useNavigate } from "react-router-dom";
import { ImageWrapper, ItemWrapper, ItemName } from "./homeItem.styles";

const HomeItem = ({ itemName, imgUrl, path }) => {
  const navigate = useNavigate();
  return (
    <ItemWrapper onClick={() => navigate(`/${path}`)}>
      <ItemName>{itemName}</ItemName>
      <ImageWrapper imgUrl={imgUrl} />
    </ItemWrapper>
  );
};

export default HomeItem;

import Rectangle from "../components/utils/rectangle/rectangle";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import QRcode from "../components/utils/qr-code/qrCode";
import ListItem from "../components/utils/list-Item/listItem";
import SearchProductData from "../DATA/SEARCH_PRODUCT_DATA";
import Navigation from "../components/utils/navigation/navigation";
import ListView from "../components/utils/list-view/listView";

import {
  QRcodeWrappr,
  ShopSmartHeadingWrappr,
} from "./styles/shoppingPage.styles";

import { useState } from "react";

const ShoppingPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === id ? null : id
    );
  };

  const handleBlur = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Rectangle marginBottom="5.3rem" />
      <ShopSmartHeadingWrappr>
        <ShopSmartHeading marginBottom="3.8rem" />
      </ShopSmartHeadingWrappr>
      <QRcodeWrappr>
        <QRcode marginBottom="5.4rem" />
      </QRcodeWrappr>
      <ListView height="50vh">
        {SearchProductData.map((data) => (
          <>
            <ListItem
              handleClick={() => handleClick(data.id)}
              handleBlur={handleBlur}
              id={data.id}
              showDropdown={selectedItem === data.id}
              heading={data.ItemHeading}
              paragraph={data.ItemParagraph}
              cover={data.ItemImg}
              svgIcon={data.ItemMenuIcon}
              numberOfStars={data.itemStar}
            />
          </>
        ))}
      </ListView>
      <Navigation />
    </>
  );
};

export default ShoppingPage;

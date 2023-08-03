import Rectangle from "../components/utils/rectangle/rectangle";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import QRcode from "../components/utils/qr-code/qrCode";
import SearchInput from "../components/utils/search-input/searchInput";
import ListItem from "../components/utils/list-Item/listItem";
import SearchProductData from "../DATA/SEARCH_PRODUCT_DATA";
import ListView from "../components/utils/list-view/listView";
import Navigation from "../components/utils/navigation/navigation";
import { useState } from "react";
import {
  QRcodeWrappr,
  SearchInputWrappr,
  SearchInputWrapprForCenter,
} from "./styles/searchProduct.styles";
import Button from "../components/utils/button/button";
import theme from "../theme";

const SearchProduct = () => {
  const [fill, setFill] = useState([]);

  const handleClick = (itemId) => {
    if (fill.includes(itemId)) {
      setFill(fill.filter((id) => id !== itemId));
    } else {
      setFill([...fill, itemId]);
    }
  };

  return (
    <>
      <Rectangle marginBottom="4.8rem" />
      <ShopSmartHeading marginBottom="1.3rem" />
      <QRcodeWrappr>
        <QRcode marginBottom="1.3rem" />
      </QRcodeWrappr>
      <SearchInputWrapprForCenter>
        <SearchInputWrappr>
          <SearchInput placeholder="Add List" marginBottom="4.4rem" />
          <Button
            height="3.7rem"
            width="6rem"
            fontWeight={theme.typography.fontWeight.medium}
            color={theme.color.white}
            fontSize={theme.typography.fontSize.xs}
            borderRadius={theme.spacing.xxs}
            bg={theme.color.primary}
          >
            Add
          </Button>
        </SearchInputWrappr>
      </SearchInputWrapprForCenter>
      <ListView height="48vh">
        {SearchProductData.map((data) => (
          <ListItem
            key={data.id}
            handleClick={() => handleClick(data.id)}
            heading={data.ItemHeading}
            paragraph={data.ItemParagraph}
            cover={data.ItemImg}
            svgIcon={
              fill.includes(data.id)
                ? data.ItemWishlishFill
                : data.ItemWhishlist
            }
            date={data.date}
          />
        ))}
      </ListView>

      <Navigation />
    </>
  );
};

export default SearchProduct;

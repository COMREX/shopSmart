import Header from "../components/utils/header/header";
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
import BarcodeScanner from "../components/barcode-scanner/barcodeScanner";
import menuIcon from "../Assets/svgs/dots-item.svg";

const AddInventory = () => {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    setResult(data);
  };
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
      <Header marginBottom="4.8rem" />
      <ShopSmartHeading marginBottom="1.3rem" />
      <QRcodeWrappr>
        <BarcodeScanner onScan={handleScan} />
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
            heading={data.ItemHeading}
            paragraph={data.ItemParagraph}
            cover={data.ItemImg}
            svgIcon={menuIcon}
            date={data.date}
            handleClick={() => handleClick(data.id)}
            handleBlur={handleBlur}
            showDropdown={selectedItem === data.id}
            id={data.id}
          />
        ))}
      </ListView>

      <Navigation />
    </>
  );
};

export default AddInventory;

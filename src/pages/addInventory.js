import React, { useState, useEffect } from "react";
import Header from "../components/utils/header/header";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import QRcode from "../components/utils/qr-code/qrCode";
import SearchInput from "../components/utils/search-input/searchInput";
import ListItem from "../components/utils/list-Item/listItem";
import ListView from "../components/utils/list-view/listView";
import Navigation from "../components/utils/navigation/navigation";
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
  const [scanResults, setScanResults] = useState(() => {
    let itemsInLocalStorage = localStorage.getItem("scannedItems");
    return itemsInLocalStorage ? JSON.parse(itemsInLocalStorage) : [];
  });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("scannedItems", JSON.stringify(scanResults));
  }, [scanResults]);

  const handleScan = (data) => {
    const newItem = {
      id: scanResults.length + 1,
      ItemHeading: data.substring(0, 10),
      ItemParagraph: "Scanned Item",
      date: new Date().toLocaleDateString(),
    };

    setScanResults((prevItems) => [newItem, ...prevItems]);
  };

  const handleClick = (id) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === id ? null : id
    );
  };

  const handleDelete = (id, event) => {
    console.log("i clicked");
    const videoRef = document.getElementById("barcode-scanner-video");
    if (videoRef) {
      videoRef.pause();
    }

    setScanResults((prevItems) => prevItems.filter((data) => data.id !== id));
  };

  const handleBlur = () => {
    setSelectedItem(null);
  };

  const handleClearAllList = () => {
    setScanResults([]);
    localStorage.removeItem("scannedItems");
  };

  return (
    <div style={{ flexGrow: 1 }}>
      {/* <Header marginBottom="4.8rem" /> */}
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
          <Button
            height="3.7rem"
            width="10rem"
            marginBottom="1.5rem"
            fontWeight={theme.typography.fontWeight.medium}
            color={theme.color.white}
            fontSize={theme.typography.fontSize.xs}
            borderRadius={theme.spacing.xxs}
            bg={theme.color.primary}
            onClick={handleClearAllList}
          >
            Remove all
          </Button>
        </SearchInputWrappr>
      </SearchInputWrapprForCenter>
      <ListView height="48vh">
        {scanResults.map((data) => (
          <ListItem
            key={data.id}
            heading={data.ItemHeading}
            paragraph={data.ItemParagraph}
            cover={data.ItemImg}
            svgIcon={menuIcon}
            date={data.date}
            handleClick={() => handleClick(data.id)}
            handleDelete={() => handleDelete(data.id)}
            handleBlur={handleBlur}
            showDropdown={selectedItem === data.id}
            id={data.id}
          />
        ))}
      </ListView>
      <Navigation />
    </div>
  );
};

export default AddInventory;

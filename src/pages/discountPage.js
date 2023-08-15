import DiscountPageItems from "../components/discount-grid-items/discoutPageItems";
import Navigation from "../components/utils/navigation/navigation";
import Header from "../components/utils/header/header";
import ShopSmartHeading from "../components/utils/shop-smart-heading/shopSmartHeading";
import SearchInput from "../components/utils/search-input/searchInput";
import useScreenWidth from "../components/utils/use-screen-width/useScreenWidth";
import GridIcon from "../Assets/svgs/grid-icon.svg";
import listIcon from "../Assets/svgs/listview.svg";
import { useState } from "react";

const DiscountPage = () => {
  const screenWidth = useScreenWidth();

  const [listView, setListView] = useState(false);
  const handleViewClick = () => {
    setListView(!listView);
  };

  return (
    <div>
      {/* <Header marginBottom="3.5rem" /> */}
      <ShopSmartHeading marginBottom="1.3rem" />
      {screenWidth >= 768 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <SearchInput />
          {listView ? (
            <img src={GridIcon} alt="grid view" onClick={handleViewClick} />
          ) : (
            <img src={listIcon} alt="list view" onClick={handleViewClick} />
          )}
        </div>
      )}
      <DiscountPageItems />
      <Navigation />
    </div>
  );
};

export default DiscountPage;

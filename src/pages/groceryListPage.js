import SearchInput from "../components/utils/SearchInput/searchInput";
import Rectangle from "../components/utils/rectangle/rectangle";
import GroceryGridItems from "../components/grocery-grid-items/groceryGridItems";
import { SearchWrapper } from "./styles/monthlyInventory.styles";
import editSVG from "../Assets/svgs/edit.svg";
import gridSVG from "../Assets/svgs/grid-icon.svg";
import listSVG from "../Assets/svgs/listview.svg";
import Navigation from "../components/utils/navigation/navigation";
import GroceryListItems from "../components/grocery-list-Items/groceryListItems";
import { useState } from "react";

const GroceryListPage = () => {
  const [gridView, setGridView] = useState(true);
  const handleClick = () => {
    setGridView(!gridView);
  };
  return (
    <>
      <Rectangle marginBottom="3.2rem" />
      <SearchWrapper>
        <SearchInput placeholder="Search Your Grocery" />
        <img src={editSVG} alt="edit" />
        <div onClick={handleClick}>
          {gridView ? (
            <img src={listSVG} alt="grid view" />
          ) : (
            <img src={gridSVG} alt="grid view" />
          )}
        </div>
      </SearchWrapper>
      {gridView ? <GroceryGridItems /> : <GroceryListItems />}
      <Navigation />
    </>
  );
};

export default GroceryListPage;

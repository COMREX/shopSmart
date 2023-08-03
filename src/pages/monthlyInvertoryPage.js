import { SearchWrapper } from "./styles/monthlyInventory.styles";

import Rectangle from "../components/utils/rectangle/rectangle";
import SearchInput from "../components/utils/search-input/searchInput";
import editSVG from "../Assets/svgs/edit.svg";
import gridSVG from "../Assets/svgs/grid-icon.svg";
import listSVG from "../Assets/svgs/listview.svg";
import Navigation from "../components/utils/navigation/navigation";
import MonthlyListItems from "../components/monthly-list-items/monthlyListItems";
import { useState } from "react";
import MonthlyGridItems from "../components/monthly-grid-items/monthlyGidItems";
import { useNavigate } from "react-router-dom";

const MonthlyInventory = () => {
  const navigate = useNavigate();
  const [gridView, setGridView] = useState(true);
  const handleClick = () => {
    setGridView(!gridView);
  };
  return (
    <>
      <Rectangle marginBottom="4rem" />
      <SearchWrapper>
        <SearchInput placeholder="Seach Your List" />
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            onClick={() => navigate("/shopping-page")}
            src={editSVG}
            alt="edit"
          />
          <div onClick={handleClick}>
            {gridView ? (
              <img src={gridSVG} alt="grid view" />
            ) : (
              <img src={listSVG} alt="list view" />
            )}
          </div>
        </div>
      </SearchWrapper>
      {gridView ? (
        <MonthlyListItems paddingBottom="6.6rem" />
      ) : (
        <MonthlyGridItems paddingBottom="6.6rem" />
      )}

      <Navigation />
    </>
  );
};

export default MonthlyInventory;

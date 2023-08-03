import groceryList from "../../DATA/GROCERY_LIST_DATA";
import ListItem from "../utils/list-Item/listItem";
import ListView from "../utils/list-view/listView";
import menuSVG from "../../Assets/svgs/dots-item.svg";
import { useEffect, useState } from "react";

const GroceryListItems = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = (id) => {
    console.log("item clicked with id of:", id);
  };
  return (
    <ListView height="50vh">
      {groceryList.map((item) => (
        <div onClick={() => handleClick(item.id)}>
          <ListItem
            key={item.id}
            cover={item.cover}
            heading={item.heading}
            paragraph={item.para}
            date={item.date}
            svgIcon={menuSVG}
            id={item.id}
          />
        </div>
      ))}
    </ListView>
  );
};

export default GroceryListItems;

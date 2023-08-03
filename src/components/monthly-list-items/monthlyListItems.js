import ListView from "../utils/list-view/listView";
import monthlyListData from "../../DATA/MONTHLY_LIST";
import ListItem from "../utils/list-Item/listItem";
import { useState } from "react";

const MonthlyListItems = ({ paddingBottom }) => {
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
    <ListView height="70vh" style={{ paddingBottom }}>
      {monthlyListData.map((item) => {
        return (
          <ListItem
            key={item.id}
            handleClick={() => handleClick(item.id)}
            handleBlur={handleBlur}
            cover={item.url}
            heading={item.heading}
            paragraph={item.paragraph}
            date={item.date}
            svgIcon={item.icon}
            id={item.id}
            showDropdown={selectedItem === item.id}
          />
        );
      })}
    </ListView>
  );
};

export default MonthlyListItems;

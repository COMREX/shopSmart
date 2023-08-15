import React from "react";
import LiftedGrid from "../../DATA/LIFTED_GRID_DATA";
import ListItem from "../utils/list-Item/listItem";
import ListView from "../utils/list-view/listView";

const DiscountListItems = () => {
  return (
    <ListView>
      {LiftedGrid.map((item) => (
        <ListItem
          key={item.id}
          heading={item.heading}
          paragraph={item.para}
          cover={item.cover}
          numberOfStars={item.reviews}
        />
      ))}
    </ListView>
  );
};

export default DiscountListItems;

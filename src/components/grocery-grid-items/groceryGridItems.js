import GridView from "../utils/gridVIew/gridView";
import groceryList from "../../DATA/GROCERY_LIST_DATA";
import LiftedGridItem from "../utils/lifted-grid-item/liftedGridItem";

const GroceryGridItems = () => {
  return (
    <GridView height="60vh">
      {groceryList.map((item) => (
        <LiftedGridItem
          key={item.id}
          cover={item.cover}
          heading={item.heading}
          paragraph={item.para}
          numberOfStars={item.reviews}
        />
      ))}
    </GridView>
  );
};

export default GroceryGridItems;

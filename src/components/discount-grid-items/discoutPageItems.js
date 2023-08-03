import GridView from "../utils/grid-view/gridView";
import LiftedGrid from "../../DATA/LIFTED_GRID_DATA";
import LiftedGridItem from "../utils/lifted-grid-item/liftedGridItem";

const DiscountPageItems = () => {
  return (
    <GridView height="72vh">
      {LiftedGrid.map((item) => {
        return (
          <LiftedGridItem
            siteLink={item.link}
            target="blank"
            key={item.id}
            cover={item.cover}
            heading={item.heading}
            paragraph={item.para}
            numberOfStars={item.reviews}
          />
        );
      })}
    </GridView>
  );
};

export default DiscountPageItems;

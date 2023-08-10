import GridView from "../utils/grid-view/gridView";
import HomeItem from "../utils/home-item/homeItem";
import HomeData from "../../DATA/HOME_DATA";
import DesktopItem from "../utils/desktop-home-item/desktopHomeItem";
import useScreenWidth from "../utils/use-screen-width/useScreenWidth";

const HomeItems = () => {
  const screenWidth = useScreenWidth();

  return (
    <div>
      <GridView>
        {HomeData.map((item) => {
          return screenWidth < 768 ? (
            <HomeItem
              key={item.id}
              itemName={item.name}
              imgUrl={item.imgURL}
              path={item.path}
            />
          ) : (
            <DesktopItem
              key={item.id}
              itemName={item.name.toUpperCase()}
              imgUrl={item.imgURL}
              path={item.path}
              numberOfStars={3}
            />
          );
        })}
      </GridView>
    </div>
  );
};

export default HomeItems;

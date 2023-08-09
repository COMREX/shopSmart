import GridView from "../utils/grid-view/gridView";
import HomeItem from "../utils/home-item/homeItem";
import HomeData from "../../DATA/HOME_DATA";
import DesktopItem from "../utils/desktop-home-item/desktopHomeItem";
import { useEffect, useState } from "react";

const HomeItems = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <GridView>
        {HomeData.map((item) => {
          return windowWidth < 768 ? (
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

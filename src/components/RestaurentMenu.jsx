import React, { useEffect, useState } from "react";
import { MENUAPI } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [menuData, setMenuData] = useState([]);

  // if I dont add the dependency array useffect will be called everytime a component renders.
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuApiData = await fetch(MENUAPI);
    const jsonData = await menuApiData.json();
    setMenuData(jsonData.data);
  };

  const restaurantMenu =
    menuData?.cards &&
    menuData?.cards.length > 2 &&
    menuData?.cards[2]?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = restaurantMenu || "";

  return (
    <div className="menu">
      {menuData === null && <Shimmer />}
      <>
        <div>
          <h1>{name}</h1>
          <h2>{cuisines.join(", ")}</h2>
          <h3>{costForTwoMessage}</h3>
        </div>
      </>
    </div>
  );
};

export default RestaurentMenu;

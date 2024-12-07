import React, { useEffect, useState } from "react";
import { MENUAPI } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [menuData, setMenuData] = useState(null);

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

  const menuListItems =
    menuData?.cards &&
    menuData?.cards.length >= 4 &&
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuListItemsCard =
    (menuListItems &&
      menuListItems.length > 2 &&
      menuListItems[2]?.card?.card?.itemCards) ||
    "";

  const { name, cuisines, costForTwoMessage } = restaurantMenu || "";


  return (
    <div className="menu">
      {menuData === null && <Shimmer />}
      <>
        <div>
          <h1>{name}</h1>
          <h2>
            {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
          </h2>
          <h3>Menu</h3>
          <ul>
            {menuListItemsCard &&
              menuListItemsCard.map((item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              ))}
          </ul>
        </div>
      </>
    </div>
  );
};

export default RestaurentMenu;

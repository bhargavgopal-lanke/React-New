import React from "react";
import Shimmer from "./Shimmer";
import Header from "./Header";
import {
  menuListFunction,
  renderMenuFewerListItems,
  useRestaurentMenu,
} from "../Helper/utilityFunctions";

const RestaurentMenu = () => {
  const { menuData } = useRestaurentMenu();

  const { restaurantMenu, menuListItemsCard } = menuListFunction(menuData);

  const { name, cuisines, costForTwoMessage } = restaurantMenu || "";

  // const renderFewListItems = renderMenuFewerListItems(menuListItemsCard);

  return (
    <div className="menu text-center">
      <Header />
      {menuData === null && <Shimmer />}
      <>
        <div className="my-10">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <h2 className="font-bold text-lg">
            {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
          </h2>
          <h3>Menu</h3>
          
        </div>
      </>
    </div>
  );
};

export default RestaurentMenu;

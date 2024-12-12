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
    <div className="menu">
      <Header />
      {menuData === null && <Shimmer />}
      <>
        <div className="rest-menu">
          <h1>{name}</h1>
          <h2>
            {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
          </h2>
          <h3>Menu</h3>
          
        </div>
      </>
    </div>
  );
};

export default RestaurentMenu;

import React from "react";
import Shimmer from "./Shimmer";
import Header from "./Header";
import { useRestaurentMenu } from "../Helper/utilityFunctions";

const RestaurentMenu = () => {
  const menuData = useRestaurentMenu();

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
      <Header />
      {menuData === null && <Shimmer />}
      <>
        <div className="rest-menu">
          <h1>{name}</h1>
          <h2>
            {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
          </h2>
          <h3>Menu</h3>
          <ul>
            {menuListItemsCard &&
              menuListItemsCard.map((item) => {
                const { price, defaultPrice } = item?.card?.info || "";
                const displayPrice =
                  (price && parseFloat(price / 100)) ||
                  (defaultPrice && parseFloat(defaultPrice / 100)) ||
                  "";
                return (
                  <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - {"Rs."} {displayPrice}
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    </div>
  );
};

export default RestaurentMenu;

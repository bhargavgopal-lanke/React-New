import React, { useState } from "react";
import Shimmer from "./Shimmer";
import Header from "./Header";
import {
  menuListFunction,
  renderMenuFewerListItems,
  useRestaurentMenu,
} from "../Helper/utilityFunctions";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentMenu = () => {
  const { menuData } = useRestaurentMenu();
  const [showIndex, setShowIndex] = useState(null);

  const { restaurantMenu, categories, menuListItemsCard } = menuListFunction(
    menuData
  );

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
          <h3 className="font-bold my-10 text-2xl underline">Menu</h3>

          {categories &&
            categories.map((list, index) => {
              return (
                <RestaurantCategory
                  key={list?.card?.card?.title}
                  categoryList={list?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                />
              );
            })}
        </div>
      </>
    </div>
  );
};

export default RestaurentMenu;

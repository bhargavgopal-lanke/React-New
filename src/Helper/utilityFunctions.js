import React, { useEffect, useState } from "react";
import { MENUAPI, SWIGGYAPIV4 } from "../utils/constants";
import { useParams } from "react-router";

// Fecthing data from SWIGGY API restaurent menu
export const useRestaurentMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  // if I dont add the dependency array useffect will be called everytime a component renders.
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuApiData = await fetch(MENUAPI + resId);
    const jsonData = await menuApiData.json();
    setMenuData(jsonData.data);
  };

  return { menuData };
};

// Menu List items function
export const menuListFunction = (menuData) => {
  const restaurantMenu =
    menuData?.cards &&
    menuData?.cards.length > 2 &&
    menuData?.cards[2]?.card?.card?.info;

  // this variable is having all the menu list items (all categories)
  const menuListItems =
    menuData?.cards &&
    menuData?.cards.length >= 4 &&
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuListItemsCard =
    (menuListItems &&
      menuListItems.length > 2 &&
      menuListItems[2]?.card?.card?.itemCards) ||
    "";

  // Basically from all the menu list items we're filtering out items based on the type
  // this type is common for all catogories of food like veg and non veg and all items are having same type
  // using this type we're fltering out the menu list items and looping through them and rendering them on UI.
  const categories =
    menuListItems &&
    menuListItems.filter(
      (cards) =>
        cards?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return {
    restaurantMenu,
    menuListItemsCard,
    categories,
  };
};

// older version of code to render menu list items
export const renderMenuFewerListItems = (menuListItemsCard) => {
  let testData =
    menuListItemsCard &&
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
    });
  return testData;
};

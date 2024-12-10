import React, { useEffect, useState } from "react";
import { MENUAPI, SWIGGYAPIV4 } from "../utils/constants";
import { useParams } from "react-router";

// Fecthing data from SWIGGY API restaurent menu
export const useRestaurentMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [ListOfRatedRes, setListOfRatedRes] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
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

  const menuListItems =
    menuData?.cards &&
    menuData?.cards.length >= 4 &&
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuListItemsCard =
    (menuListItems &&
      menuListItems.length > 2 &&
      menuListItems[2]?.card?.card?.itemCards) ||
    "";
  return {
    restaurantMenu,
    menuListItemsCard,
  };
};
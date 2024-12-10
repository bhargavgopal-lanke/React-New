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
    const data = await fetch(SWIGGYAPIV4);
    const json = await data.json();
    // Extracting the list of cards from the data.
    // const cardsListV3 =
    //   json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    const cardListV4 =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card.card?.restaurants;
    setListOfRatedRes(cardListV4);
    setFilteredRestaurents(cardListV4);
    setMenuData(jsonData.data);
  };

  const searchHandler = () => {
    const filteredRestaurentsList = ListOfRatedRes.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchInputText.toLowerCase());
    });
  
    setFilteredRestaurents(filteredRestaurentsList);
  };
  
  return { menuData, ListOfRatedRes, filteredRestaurents };
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




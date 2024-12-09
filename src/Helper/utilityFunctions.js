import React, { useEffect, useState } from "react";
import { MENUAPI } from "../utils/constants";
import { useParams } from "react-router";

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
  return menuData;
};

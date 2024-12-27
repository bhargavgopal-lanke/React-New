import React from "react";
import { MENUITEMS_IMGURL } from "../utils/constants";
import { setAddItems } from "../Slices/CartItems-Slice";
import store from "../store";
import { useDispatch } from "react-redux";

const CategoryListItems = ({ data }) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(setAddItems(item));
  };

  return (
    <div>
      {data.map((item) => {
        const {
          id,
          name,
          imageId,
          price,
          defaultPrice,
          description,
        } = item?.card?.info;

        return (
          <div
            key={id}
            className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{name}</span>
                <span>
                  <strong>₹ </strong> {(price || defaultPrice) / 100}
                </span>
              </div>
              <p className="text-md"> {description}</p>
            </div>
            <div className="w-4/12 relative">
              <div className="absolute">
                <button
                  onClick={() => handleAddItem(item)}
                  className="p-2 mx-16 rounded-lg bg-black text-white shawdow-lg"
                >
                  Add +
                </button>
              </div>
              <img src={MENUITEMS_IMGURL + imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListItems;

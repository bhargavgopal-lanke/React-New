import React from "react";
import CategoryListItems from "./CategoryListItems";

const RestaurantCategory = ({ categoryList, showItems, setShowIndex }) => {
  const { title, itemCards } = categoryList;

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <>
      <div className="w-9/12 mx-auto mb-10 bg-gray-50 py-2 px-5 shadow-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold my-3 text-xl">
            {title} ({itemCards.length})
          </span>
          <span>{!showItems ? "⬇️" : "⬆️"}</span>
        </div>
        <div>
          {showItems ? (
            <CategoryListItems
              key={itemCards?.card?.info?.key}
              data={itemCards}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;

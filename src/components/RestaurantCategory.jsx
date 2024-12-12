import React from "react";

const RestaurantCategory = ({ categoryList }) => {
  const { title, itemCards } = categoryList;

  return (
    <div className="w-6/12 mx-auto mb-10 bg-gray-50 py-2 px-3 shadow-lg flex justify-between items-center">
      <span className="font-bold my-3 text-xl">
        {title} ({itemCards.length})
      </span>
      <span>⬇️</span>
    
    </div>
  );
};

export default RestaurantCategory;

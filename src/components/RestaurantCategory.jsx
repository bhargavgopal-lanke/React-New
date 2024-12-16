import React, { useState } from "react";
import CategoryListItems from "./CategoryListItems";

const RestaurantCategory = ({ categoryList }) => {
  const [categoryDisplay, setCategoryDisplay] = useState(false);
  const { title, itemCards } = categoryList;

  return (
    <>
      <div className="w-6/12 mx-auto mb-10 bg-gray-50 py-2 px-5 shadow-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setCategoryDisplay(!categoryDisplay)}
        >
          <span className="font-bold my-3 text-xl">
            {title} ({itemCards.length})
          </span>
          <span>{!categoryDisplay ? "⬇️" : "⬆️"}</span>
        </div>
        <div>
          {categoryDisplay ? <CategoryListItems data={itemCards} /> : ""}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;

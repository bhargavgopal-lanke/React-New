import React, { useState } from "react";
import CategoryListItems from "./CategoryListItems";

const RestaurantCategory = ({ categoryList }) => {
  const [categoryDisplay, setCategoryDisplay] = useState(true);
  const { title, itemCards } = categoryList;

  return (
    <>
      <div className="w-6/12 mx-auto mb-10 bg-gray-50 py-2 px-5 shadow-lg">
        <div className="flex justify-between items-center">
          <span className="font-bold my-3 text-xl">
            {title} ({itemCards.length})
          </span>
          <span
            className="cursor-pointer"
            onClick={() => setCategoryDisplay(!categoryDisplay)}
          >
            ⬇️
          </span>
        </div>
        <div>
          {categoryDisplay ? <CategoryListItems data={itemCards} /> : ""}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;

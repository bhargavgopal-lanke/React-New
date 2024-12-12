import React from "react";

const RestaurantCategory = ({ categoryList }) => {
  const { title, itemCards } = categoryList;

  return (
    <div className="w-6/12 mx-auto mb-10 bg-gray-50 py-2 px-3 shadow-lg flex justify-between items-center">
      <span className="font-bold my-3 text-xl">{title} </span>
      <span>⬇️</span>
      {/* <ul className="">
        {itemCards.map((items) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            category,
            description,
          } = items?.card?.info;

          return (
            <>
              <li key={id} className="text-lg name">
                {name}
              </li>
              <li className="text-lg">
                <strong>Rs -</strong> {(price || defaultPrice) / 100}
              </li>
              <li className="text-lg"> {description}</li>
            </>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantCategory;

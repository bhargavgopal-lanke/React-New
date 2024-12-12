import React from "react";

const RestaurantCategory = ({ categoryList }) => {
  const { title, itemCards } = categoryList;

  return (
    <div className="">
      <h1 className="font-bold my-3 text-2xl">{title}</h1>
      <ul className="mb-10">
        {itemCards.map((items) => {
          const { id, name, price, category, description } = items?.card?.info;
          return (
            <>
              <li key={id} className="text-lg">
                {name}
              </li>
              <li className="text-lg">{price}</li>
              <li className="text-lg">{category}</li>
              <li className="text-lg">{description}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantCategory;

import React from "react";

const CategoryListItems = ({ data }) => {
  return (
    <div>
      <ul className="">
        {data.map((items) => {
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
      </ul>
    </div>
  );
};

export default CategoryListItems;

import React from "react";
import { MENUITEMS_IMGURL } from "../utils/constants";

const CategoryListItems = ({ data }) => {
  return (
    <div>
      {data.map((items) => {
        const {
          id,
          name,
          imageId,
          price,
          defaultPrice,
          description,
        } = items?.card?.info;

        console.log("imageId", imageId);

        return (
          <div className="m-2 p-2 border-b-4">
            <div key={id} className="text-lg mb-2">
              <span className="inline-block mr-3">{name}</span>
              <span>
                <strong>₹ </strong> {(price || defaultPrice) / 100}
              </span>
            </div>
            <img src={MENUITEMS_IMGURL + imageId} />
            <p className="text-md"> {description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListItems;

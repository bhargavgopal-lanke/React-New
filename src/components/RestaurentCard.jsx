import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img src={IMG_URL + resData?.cloudinaryImageId} className="food-img" />
      </div>
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")}</h4>
      <div className="card-btm-sec">
        <h4>{resData?.avgRating}</h4>
        <h4>{resData?.costForTwo}</h4>
        <h4>{`${resData?.sla?.deliveryTime} mins`}</h4>
      </div>
    </div>
  );
};

// higher order component
// it takes resto card as an input and returns an new component
// input - RestaurentCard => RestaurentCardPromoted

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurentCard {...props} />
      </>
    );
  };
};

export default RestaurentCard;

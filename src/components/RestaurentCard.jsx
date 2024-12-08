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

export default RestaurentCard;

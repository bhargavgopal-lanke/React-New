import React from "react";
import vegBiryani from "../public/veg-biryani.jpeg";

const RestaurentCard = ({ name, rating }) => {
  return (
    <div className="res-card">
      <img src={vegBiryani} className="food-img" />
      <h3>{name}</h3>
      <h4>Biryai, North Indian, Asian</h4>
      <div className="card-btm-sec">
        <h4>{rating}</h4>
        <h4>38mins</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;

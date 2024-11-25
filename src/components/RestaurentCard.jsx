import React from "react";
import vegBiryani from "../../public/veg-biryani.jpeg";

const RestaurentCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4c3c3f544973bcc198947681e81325e4`} className="food-img" />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines}</h4>
      <div className="card-btm-sec">
        <h4>{resData?.avgRating}</h4>
        <h4>{`${resData?.sla?.deliveryTime} mins`}</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;

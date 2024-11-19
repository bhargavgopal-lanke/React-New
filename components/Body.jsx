import React from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body-sec">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body-sec">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard name={"Bawarchi"} rating={"4.4"} />
        <RestaurentCard name={"Meghana Foods"} rating={"4.0"} />
        <RestaurentCard name={"Mehfil"} rating={"4.1"} />
        <RestaurentCard name={"Ashoka"} rating={"3.4"} />
      </div>
    </div>
  );
};

export default Body;

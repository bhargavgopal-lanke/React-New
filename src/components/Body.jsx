import React from "react";
import RestaurentCard from "./RestaurentCard";
import { resObj } from "../utils/constants";

const BodyRes = () => {
  return (
    <div className="body-sec">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard resData={resObj} />
        <RestaurentCard name={"Meghana Foods"} rating={"4.0"} />
        <RestaurentCard name={"Mehfil"} rating={"4.1"} />
        <RestaurentCard name={"Ashoka"} rating={"3.4"} />
      </div>
    </div>
  );
};

export default BodyRes;

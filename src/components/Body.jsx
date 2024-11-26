import React from "react";
import RestaurentCard from "./RestaurentCard";
import { RES_OBJ } from "../utils/constants";

const BodyRes = () => {
  return (
    <div className="body-sec">
      <div className="search">Search</div>
      <div className="res-container">
        {RES_OBJ.map((data) => {
          return <RestaurentCard key={data.info.id} resData={data.info} />;
        })}
      </div>
    </div>
  );
};

export default BodyRes;

import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { RES_OBJ, SWIGGYAPI } from "../utils/constants";

const BodyRes = () => {
  const [ListOfRatedRes, setListOfRatedRes] = useState(RES_OBJ);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPI);
    const json = await data.json();
    console.log("data", json);
  };

  return (
    <div className="body-sec">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const listedRestaurents = ListOfRatedRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRatedRes(listedRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {ListOfRatedRes.map((data) => {
          return <RestaurentCard key={data.info.id} resData={data.info} />;
        })}
      </div>
    </div>
  );
};

export default BodyRes;

import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { SWIGGYAPIV3 } from "../utils/constants";

const BodyRes = () => {
  const [ListOfRatedRes, setListOfRatedRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPIV3);
    const json = await data.json();
    const cardsList =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    setListOfRatedRes(cardsList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body-sec">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const listedRestaurents = ListOfRatedRes.filter((res) => {
              const rating = res?.card?.card?.info.avgRating;
              return rating > 4;
            });
            setListOfRatedRes(listedRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {ListOfRatedRes.map((data) => {
          let resDataList = data?.card?.card?.info;
          let resDataListId = data?.card?.card?.info?.id;
          return <RestaurentCard key={resDataListId} resData={resDataList} />;
        })}
      </div>
    </div>
  );
};

export default BodyRes;

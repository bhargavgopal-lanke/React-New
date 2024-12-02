import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { SWIGGYAPIV3, SWIGGYAPIV4 } from "../utils/constants";
import Shimmer from "./Shimmer";

const BodyRes = () => {
  const [ListOfRatedRes, setListOfRatedRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPIV4);
    const json = await data.json();

    // const cardsListV3 =
    //   json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    const cardListV4 =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card.card?.restaurants;
    setListOfRatedRes(cardListV4);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="body-sec">
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
      {/* rendering on the basis of a condition is known as conditional rendering */}
      {ListOfRatedRes.length === 0 && <Shimmer />}
      <div className="res-container">
        {ListOfRatedRes.map((data) => {
          // v3 api data dstructuring
          //  let resDataList = data?.card?.card?.info;
          //  let resDataListId = data?.card?.card?.info?.id;
          return <RestaurentCard key={data.info.id} resData={data.info} />;
        })}
      </div>
    </div>
  );
};

export default BodyRes;

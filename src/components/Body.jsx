import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { SWIGGYAPIV3, SWIGGYAPIV4 } from "../utils/constants";

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

  // if (ListOfRatedRes.length === 0) {
  //   return <h1>Loading...</h1>;
  // }

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
      {ListOfRatedRes.length === 0 && <h1>Loading....</h1>}
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

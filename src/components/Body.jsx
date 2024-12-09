import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { SWIGGYAPIV3, SWIGGYAPIV4 } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const BodyRes = () => {
  const [ListOfRatedRes, setListOfRatedRes] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPIV4);
    const json = await data.json();
    // Extracting the list of cards from the data.
    // const cardsListV3 =
    //   json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    const cardListV4 =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card.card?.restaurants;
    setListOfRatedRes(cardListV4);
    setFilteredRestaurents(cardListV4);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = () => {
    const filteredRestaurentsList = ListOfRatedRes.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchInputText.toLowerCase());
    });

    setFilteredRestaurents(filteredRestaurentsList);
  };

  return (
    <div className="body-sec">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box form-control"
            value={searchInputText}
            onChange={(e) => setSearchInputText(e.target.value)}
          />
          {/* Filter the restuarent cards and update the UI  */}
          <button onClick={searchHandler} className="btn btn-secondary">
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const listedRestaurents = ListOfRatedRes.filter((res) => {
              const rating = res?.info?.avgRating;
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
        {filteredRestaurents.map((data, index) => {
          // v3 api data dstructuring
          //  let resDataList = data?.card?.card?.info;
          //  let resDataListId = data?.card?.card?.info?.id;
          return (
            <Link
              key={index}
              to={`/restuarent/${data.info.id}`}
              className="res-card-link"
            >
              <RestaurentCard key={data.info.id} resData={data.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyRes;

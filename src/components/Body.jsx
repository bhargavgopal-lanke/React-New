import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useRestaurentMenu } from "../Helper/utilityFunctions";

const BodyRes = () => {
  const [searchInputText, setSearchInputText] = useState("");

  const { ListOfRatedRes, filteredRestaurents } = useRestaurentMenu();



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

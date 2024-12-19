import React, { useContext, useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Helper/useOnlineStatus";
import { SWIGGYAPIV4 } from "../utils/constants";
import userContext from "../utils/UserContext";

const BodyRes = () => {
  const [ListOfRatedRes, setListOfRatedRes] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const RestoCardPromoted = withPromotedLabel(RestaurentCard);
  const { loggedinUser, setUserName } = useContext(userContext);

  useEffect(() => {
    restuarentCardsData();
  }, []);

  const restuarentCardsData = async () => {
    const fetchData = await fetch(SWIGGYAPIV4);
    const jsonData = await fetchData.json();
    const cardListV4 =
      jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card.card?.restaurants;
    setListOfRatedRes(cardListV4);
    setFilteredRestaurents(cardListV4);
  };

  const searchHandler = () => {
    const filteredRestaurentsList = ListOfRatedRes.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchInputText.toLowerCase());
    });

    setFilteredRestaurents(filteredRestaurentsList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You're offline. Please check your internet connection.</h1>;

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
        <div className="search">
          <label className="font-bold">User Name:</label>
          <input
            type="text"
            className="form-control"
            value={loggedinUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const listedRestaurents = ListOfRatedRes.filter((res) => {
              const rating = res?.info?.avgRating;
              return rating > 4;
            });

            setFilteredRestaurents(listedRestaurents); 
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
              {data.info.promoted === true ? (
                <RestoCardPromoted key={data.info.id} resData={data.info} />
              ) : (
                <RestaurentCard key={data.info.id} resData={data.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyRes;

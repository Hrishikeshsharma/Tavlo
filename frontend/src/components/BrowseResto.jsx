import React, { useEffect, useState } from "react";
import "./BrowseResto.css";
import TopNav from "./TopNav";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import BookNow from "./BookNow";
import { useAuth } from "../contexts/authContext";
import PureVegSwitch from "./PureVegSwitch";

function BrowseResto() {
  const [searchLocation, setSearchLocation] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [change, setChange] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:8080/hotels")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.hotel_name.toLowerCase().includes(searchRestaurant.toLowerCase()) &&
      r.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const vegRestaurants = restaurants.filter(
    (r) => r.type === "Veg" || r.type === "Pure veg"
  );

  const letsBook = (restaurants) => {
    setSelectedRestaurant(restaurants);
    setChange(false);
  };
  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const requiredRestaurants =
    isOn === true ? vegRestaurants : filteredRestaurants;

  return change ? (
    <div className="backbody">
      <div className="Body">
        <TopNav
          one={"Home"}
          two={"Bookings"}
          ol={"home"}
          tl={"userbookings"}
        ></TopNav>
        <p className="welcome">Welcome, {user.name}!</p>
        <div className="browbody">
          <div className="searchbox">
            <span className="searchhead">Search</span>
            <input
              type="text"
              placeholder="Location"
              className="browlocation"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Restaurant name"
              className="browrestaurant"
              value={searchRestaurant}
              onChange={(e) => setSearchRestaurant(e.target.value)}
            />
          </div>
          <PureVegSwitch handleToggle={handleToggle} label={"Pure veg"} />
          &nbsp;&nbsp;
        </div>
        <hr />
        <div className="horizontal-scroll">
          {requiredRestaurants.map((r, index) => (
            <RestaurantCard
              key={index}
              restauName={r.hotel_name}
              img={r.image}
              address={r.address}
              rating={r.rating}
              type={r.type}
              click={() => letsBook(r)}
            />
          ))}
        </div>
        <hr></hr>
      </div>
    </div>
  ) : (
    <BookNow restaurant={selectedRestaurant}></BookNow>
  );
}
export default BrowseResto;

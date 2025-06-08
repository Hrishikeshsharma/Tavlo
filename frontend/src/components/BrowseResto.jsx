import React, { useEffect, useState } from "react";
import "./BrowseResto.css";
import TopNav from "./TopNav";
import RestaurantCard from "./RestaurantCard";
import axios from "../axiosInstance";
import { useAuth } from "../contexts/AuthContext";
import PureVegSwitch from "./PureVegSwitch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BrowseResto() {
  const [searchLocation, setSearchLocation] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [isOn, setIsOn] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/hotels")
      .then((response) => setRestaurants(response.data))
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

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const letsBook = (restaurant) => {
    navigate("/book", { state: { restaurant } });
  };

  const requiredRestaurants = isOn ? vegRestaurants : filteredRestaurants;

  return (
    <div className="backbody">
      <div className="Body">
        <TopNav
          one={"Home"}
          two={"Bookings"}
          ol={"browse"}
          tl={"userbookings"}
        />
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
        <hr />
      </div>
    </div>
  );
}

export default BrowseResto;

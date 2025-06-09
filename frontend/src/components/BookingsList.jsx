import React from "react";
import { useState } from "react";
import Bookings from "./Bookings";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import axios from "../axiosInstance";
import TopNav from "./TopNav";
import "./BookingsList.css";
import { useNavigate } from "react-router-dom";

function BookingsList() {
  const { user } = useAuth();
  const [userBookings, setUserBookings] = useState([]);
  useEffect(() => {
    axios
      .get("https://tavloserver.onrender.com/booking/book")
      .then((response) => {
        setUserBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);
  console.log("User:", user);

  const navigate = useNavigate();
  const toBack = () => {
    navigate("/browse");
  };

  const filteredBookings = userBookings.filter((r) => {
    return r.email === user.email;
  });
  return (
    <div className="bookings-page">
      <TopNav two={"Restaurants"} tl={"browse"} />

      <div className="scrollable-content">
        <div className="h2box">
          <h2 className="h2para">Bookings</h2>
        </div>
        <div className="itemonpage">
          {filteredBookings.map((booking, index) => (
            <Bookings
              bookId={booking.bookId}
              _id={booking._id}
              key={index}
              restaurant={booking.restaurant}
              slot={booking.slot}
              customerName={booking.customerName}
              forDate={booking.forDate}
            />
          ))}
        </div>
      </div>

      <input type="button" value="Back" className="back-btn" onClick={toBack} />
    </div>
  );
}

export default BookingsList;

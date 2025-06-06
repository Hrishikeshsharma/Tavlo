import React from "react";
import { useState } from "react";
import Bookings from "./Bookings";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav";
import "./BookingsList.css";

function BookingsList() {
  const { user } = useAuth();
  const [userBookings, setUserBookings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/booking/book")
      .then((response) => {
        setUserBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);
  console.log("User:", user);

  const filteredBookings = userBookings.filter((r) => {
    return r.email === user.email;
  });
  return (
    <div>
      <TopNav
        two={"Restaurants"}
        tl={"browse"}
        one={"Home"}
        ol={"home"}
      ></TopNav>
      <div className="body">
        <div className="h2box">
          <h2 className="h2para">Bookings</h2>
        </div>
        {filteredBookings.map((booking, index) => (
          <Bookings
            _id={booking._id}
            key={index}
            restaurant={booking.restaurant}
            slot={booking.slot}
            customerName={booking.customerName}
            forDate={booking.forDate}
          ></Bookings>
        ))}
      </div>
    </div>
  );
}

export default BookingsList;

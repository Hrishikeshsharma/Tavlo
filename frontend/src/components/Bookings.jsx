import "./Bookings.css";
import React from "react";
import "./bookings.css";
import { useNavigate } from "react-router-dom";

function Bookings({ _id, restaurant, slot, customerName, forDate, bookId }) {
  const navigate = useNavigate();

  function toOpen() {
    navigate("/menu", {
      state: {
        bookingId: _id,
      },
    });
  }

  function toOrders() {
    navigate("/pastorders", {
      state: {
        bookingId: _id,
      },
    });
  }

  return (
    <div className="wall">
      <div className="bookingscard">
        <p className="pra">
          <span className="titledatauniq">Booking Id:</span>
          <span className="value">#{bookId}</span>
        </p>
        <span className="titledata">Restaurant name:</span>
        <span className="value">{restaurant}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="titledata">Date:</span>
        <span className="value">{forDate}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="titledata">Time slot:</span>
        <span className="value">{slot}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="titledata">Name:</span>
        <span className="value">{customerName}</span>
        <br />
        <br />
        <button type="submit" className="button" onClick={toOpen}>
          Menu
        </button>
        &nbsp;&nbsp;
        <button type="submit" className="button" onClick={toOrders}>
          Orders
        </button>
      </div>
    </div>
  );
}

export default Bookings;

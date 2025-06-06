import TopNav from "./TopNav";
import { useState } from "react";
import axios from "axios";
import "./BookNow.css";
import { useAuth } from "../contexts/authContext";
import { useNavigate, useLocation } from "react-router-dom";

function BookNow() {
  const location = useLocation();
  const restaurant = location.state?.restaurant;

  const [message, setMessage] = useState("");
  const [count, setCount] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [enable, setEnable] = useState(false);
  const { user } = useAuth();
  const [onDate, setOnDate] = useState();
  const navigate = useNavigate();

  const handleCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/booking/check", {
        resto: restaurant.hotel_name,
        members: count,
        slot: timeSlot,
      });
      setMessage(response.data.message);
      setEnable(response.data.message === "Table available. Book now!");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to check availability"
      );
      setEnable(false);
    }
  };

  const handleBook = async (e) => {
    e.preventDefault();
    const generateSixDigitId = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };

    const bookId = generateSixDigitId();

    try {
      const bookRespo = await axios.post("http://localhost:8080/booking/book", {
        bookId,
        resto: restaurant.hotel_name,
        members: count,
        slot: timeSlot,
        customerName: name,
        email: user.email,
        forDate: onDate,
      });
      setMessage(bookRespo.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to book.");
    }
  };

  function toBack() {
    navigate("/browse");
  }

  const isCheckEnabled =
    name.trim() !== "" && count > 0 && onDate && timeSlot.trim() !== "";

  if (!restaurant) {
    return <div className="error">No restaurant selected.</div>;
  }

  return (
    <div className="mainbox">
      <TopNav one="Home" ol="browse" two="Bookings" tl="userbookings" />
      <input type="button" value="Back" onClick={toBack} className="back-btn" />
      <div className="maincontainer">
        <div className="headingbox">
          <span className="nameheading">{restaurant.hotel_name}</span>
          &nbsp;&nbsp;
          <span className="type">{restaurant.type}</span>
        </div>
        <div className="adresbox">
          <p className="address">{restaurant.address}</p>
        </div>
        <div>
          <p className="reserve">Book your table now..!</p>
          <form onSubmit={handleCheck} className="feild">
            <label className="labels">Your Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="feildbox"
            />
            <label className="labels">No. of guests :</label>
            <input
              type="number"
              className="feildbox"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <label className="labels">Choose Date :</label>
            <input
              type="date"
              className="feildbox"
              value={onDate}
              onChange={(e) => setOnDate(e.target.value)}
            />
            <label className="labels">Time slot :</label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="data"
            >
              <option value="">--Select Time--</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </select>
            <br />
            <br />
            <div className="checkbutton">
              <button
                type="submit"
                className="submit"
                disabled={!isCheckEnabled}
              >
                Check Availability
              </button>
            </div>
          </form>
          <div className="mesbox">
            <p
              className={
                message
                  ? message === "Table available. Book now!" ||
                    message === "Booking confirmed"
                    ? "alert alert-success"
                    : "alert alert-danger"
                  : ""
              }
            >
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="bookbutton">
        <button
          type="button"
          onClick={handleBook}
          className={enable ? "bookunlock" : "booklock"}
          disabled={!enable}
        >
          Book now
        </button>
      </div>
    </div>
  );
}

export default BookNow;

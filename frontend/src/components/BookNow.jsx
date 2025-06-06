import TopNav from "./TopNav";
import { useState } from "react";
import axios from "axios";
import "./BookNow.css";
import { useAuth } from "../contexts/authContext";

function BookNow({ restaurant }) {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [enable, setEnable] = useState(false);
  const { user } = useAuth();
  const [onDate, setOnDate] = useState();

  const handleCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/booking/check", {
        resto: restaurant.hotel_name,
        members: count,
        slot: timeSlot,
      });
      console.log("Backend response:", response);
      setMessage(response.data.message);
      if (response.data.message === "Table available. Book now!") {
        setEnable(true);
      }
      if (response.data.members === "Table not available") {
        setEnable(false);
      }
    } catch (error) {
      console.error("Error checking:", error.response?.data || error.message);
      setMessage(
        error.response?.data?.message || "Failed to check availability"
      );
    }
  };

  const handleBook = async (e) => {
    console.log("User from context:", user);

    e.preventDefault();
    try {
      const bookRespo = await axios.post("http://localhost:8080/booking/book", {
        resto: restaurant.hotel_name,
        members: count,
        slot: timeSlot,
        customerName: name,
        email: user.email,
        forDate: onDate,
      });
      console.log("Booking response:", bookRespo);
      setMessage(bookRespo.data.message);
    } catch (error) {
      console.error("Error booking:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Failed to book.");
    }
  };
  const isCheckEnabled =
    name.trim() !== "" && count > 0 && onDate && timeSlot.trim() !== "";
  return (
    <div className="mainbox">
      <TopNav
        one="Restaurants"
        ol="browse"
        two="Bookings"
        tl="userbookings"
      ></TopNav>
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
            <label htmlFor="name" className="labels">
              Your Name :
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="feildbox"
            />
            <label htmlFor="guestNumber" className="labels">
              No. of guests :
            </label>
            <input
              id="guestNumber"
              type="number"
              className="feildbox"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            ></input>

            <label htmlFor="date" className="labels">
              Choose Date :
            </label>

            <input
              type="date"
              id="date"
              className="feildbox"
              value={onDate}
              onChange={(e) => setOnDate(e.target.value)}
            ></input>

            <label htmlFor="timelist" className="labels">
              Time slot :
            </label>
            <br />
            <select
              id="timelist"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="data"
            >
              <option value={"12:00 PM"}>12:00 PM</option>
              <option value={"1:00 PM"}>1:00 PM</option>
              <option value={"2:00 PM"}>2:00 PM</option>
              <option value={"7:00 PM"}>7:00 PM</option>
              <option value={"8:00 PM"}>8:00 PM</option>
              <option value={"9:00 PM"}>9:00 PM</option>
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
              {message || null}
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

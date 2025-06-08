import React, { useState } from "react";
import "./AddRestaurant.css";
import axios from "../axiosInstance";

function AddRestaurant() {
  const [form, setForm] = useState({
    hotel_name: "",
    email: "",
    address: "",
    location: "",
    phone: "",
    pin: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://https://tavloserver.onrender.com/hotels", form);
      alert("Restaurant added successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit restaurant details");
    }
  };

  return (
    <div className="coverbox">
      <div className="formbox">
        <h2>Add Restaurant</h2>
        <form className="customform" onSubmit={handleSubmit}>
          <div className="formpair">
            <div className="form-row">
              <label htmlFor="name">Hotel Name:</label>
              <input
                id="name"
                name="hotel_name"
                placeholder="Hotel name"
                value={form.hotel_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Hotel Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="formpair">
            <div className="form-row">
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="location">Location:</label>
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City/Town"
              />
            </div>
          </div>
          <div className="formpair">
            <div className="form-row">
              <label htmlFor="phone">Contact No:</label>
              <input
                id="phone"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="pin">PIN:</label>
              <input
                id="pin"
                name="pin"
                placeholder="PIN"
                value={form.pin}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row radio-row">
            <label>Type:</label>
            <label>
              <input
                type="radio"
                name="type"
                value="Veg"
                checked={form.type === "Veg"}
                onChange={handleChange}
              />{" "}
              Veg
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Non veg"
                checked={form.type === "Non veg"}
                onChange={handleChange}
              />{" "}
              Non-Veg
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Veg & Non veg"
                checked={form.type === "Veg & Non veg"}
                onChange={handleChange}
              />{" "}
              Veg & Non-Veg
            </label>
          </div>
          <div className="butgroup">
            <button type="submit" className="butt">
              Submit
            </button>
            <button
              type="reset"
              className="butt"
              onClick={() =>
                setForm({
                  hotel_name: "",
                  email: "",
                  address: "",
                  location: "",
                  phone: "",
                  pin: "",
                  type: "",
                })
              }
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRestaurant;

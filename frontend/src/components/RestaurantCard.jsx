import React from "react";
import "./RestaurantCard.css";

function RestaurantCard({ restauName, rating, img, address, type, click }) {
  return (
    <div className="restobox" onClick={click}>
      <div>
        <img src={`/imagesforapp/${img}`} className="image" alt="dynamic"></img>
      </div>
      <div className="detailsbox">
        <div className="namebox">
          <div className="name">{restauName}</div>
          <div className="restotype">{type}</div>
        </div>
        <div className="ratingbox">
          <div className="rating">{rating}★ </div>
        </div>
        <div className="addressbox">
          <div className="adres">📍{address}</div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

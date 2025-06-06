import React from "react";
import "./Item.css";

function Item({ itemName, price, quantity, onQuantityChange, serial }) {
  function add() {
    onQuantityChange(itemName, quantity + 1);
  }
  function subt() {
    onQuantityChange(itemName, Math.max(0, quantity - 1));
  }
  return (
    <span className="perticular">
      <span className="item">{serial}</span>
      <span className="item">{itemName}</span>
      <span className="price">₹ {price}/-</span>
      <span className="selector">
        <button type="button" onClick={add} className="control1">
          +
        </button>
        <span className="quantity">{quantity}</span>
        <button type="button" onClick={subt} className="control2">
          -
        </button>
      </span>
    </span>
  );
}

export default Item;

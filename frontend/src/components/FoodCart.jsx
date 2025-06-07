import React, { useState, useEffect } from "react";
import "./FoodCart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";

function FoodCart({ selectedItems, quantity }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const bookingId = location.state?.bookingId;

  const [disableCart, setDisableCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = selectedItems.reduce((acc, item) => {
    return acc + item.price * quantity[item.name];
  }, 0);

  useEffect(() => {
    setDisableCart(totalAmount === 0);
  }, [totalAmount]);

  const handleOrderClick = async () => {
    const items = selectedItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: quantity[item.name],
    }));

    try {
      await axios.post("http://localhost:8080/orders", {
        bookingId,
        items,
        total: totalAmount,
        email: user?.email || "guest@example.com",
      });

      setOrderPlaced(true);
      alert("Order placed successfully");
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div>
      {!orderPlaced && (
        <div className="foodcart">
          <p className="orderhead">Order Now</p>

          {selectedItems.map((item, index) => (
            <div key={index}>
              <span className="items">
                {index + 1}. {item.name} × {quantity[item.name]} = ₹
                {item.price * quantity[item.name]}
              </span>
            </div>
          ))}

          <p className="total">Total: ₹{totalAmount}</p>
          <input
            type="button"
            value="Order"
            className="button"
            onClick={handleOrderClick}
            disabled={disableCart}
          />
        </div>
      )}
      {orderPlaced && (
        <p className="confirmation">Thank you! Your order has been placed.</p>
      )}
    </div>
  );
}

export default FoodCart;

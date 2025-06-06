import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const location = useLocation();
  const bookingId = location.state?.bookingId;

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/orders", {
          params: { bookingId },
        });
        setOrders(response.data);
        console.log("Orders fetched:", response.data);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    if (bookingId) getOrders();
  }, [bookingId]);

  return (
    <div className="container">
      <h1 className="customhead">Hotel name</h1>
      <p>Address</p>
      <p>Contact: 264862946 | Email: hskh@mail.com</p>
      <h2>Invoice</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5">No orders found.</td>
            </tr>
          ) : (
            orders.flatMap((order, orderIndex) =>
              order.items.map((item, index) => (
                <tr key={`${orderIndex}-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyOrders;

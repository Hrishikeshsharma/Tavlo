import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function PastOrders() {
  const location = useLocation();
  const bookingId = location.state?.bookingId;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/orders?bookingId=${bookingId}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };

    fetchOrders();
  }, [bookingId]);

  return (
    <div>
      <h2>Past Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h4>Order #{order.orderNumber}</h4>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p>Total: ₹{order.total}</p>
            <p>Placed on: {new Date(order.createdAt).toLocaleString()}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default PastOrders;

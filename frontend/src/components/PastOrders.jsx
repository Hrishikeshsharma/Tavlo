import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./PastOrders.css";

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
    <div className="pastbox">
      <div className="pastinbox">
        <div className="pastheadbox">
          <h2 className="pasthead">Past Orders</h2>
        </div>
        {orders.length === 0 ? (
          <p className="notfound">No orders found.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="order-card">
              <h4 className="orderhash">Order #{order.orderNumber}</h4>
              <p className="placed">
                Placed on: {new Date(order.createdAt).toLocaleString()}
              </p>
              <ol className="orderlist">
                {order.items.map((item, idx) => (
                  <li key={idx} className="lisite">
                    {item.name} × {item.quantity} = ₹
                    {item.price * item.quantity}
                  </li>
                ))}
              </ol>
              <p className="grandsum">Total: ₹{order.total}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PastOrders;

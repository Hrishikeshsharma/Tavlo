import React, { useState } from "react";

function SingleItem({ name, price }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div>
      <p>
        {name} - ₹{price}
      </p>
      <div>
        <button onClick={decrement}>-</button>
        <span> {quantity} </span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default SingleItem;

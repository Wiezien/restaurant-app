import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

const Cart = () => {
  const { totalPrice } = useContext(RestaurantContext);
  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

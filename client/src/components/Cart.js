import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

const Cart = () => {
  const { totalPrice } = useContext(RestaurantContext);
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-content">
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        ))}
        <span style={{ color: "brown" }}>Total Price: </span> ${totalPrice}
      </div>
    </div>
  );
};

export default Cart;

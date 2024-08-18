import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

const Cart = () => {
  const { totalPrice } = useContext(RestaurantContext);
};

export default Cart;

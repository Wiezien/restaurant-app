import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

const DishesMenu = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);
};

export default DishesMenu;

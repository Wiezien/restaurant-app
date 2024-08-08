import React, { useContext } from "react";
import DishCard from "./DishCard";
import { RestaurantContext } from "../contexts/RestaurantContext";

const DishesMenu = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);
};

export default DishesMenu;

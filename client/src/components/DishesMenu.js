import React, { useContext } from "react";
import DishCard from "./DishCard";
import { RestaurantContext } from "../contexts/RestaurantContext";

const DishesMenu = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);

  return (
    <div>
      <h2>Menu</h2>
    </div>
  );
};
export default DishesMenu;

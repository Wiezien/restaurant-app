import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

const DishCard = ({ dish }) => {
  const { handleAddItems, handleRemoveItems } = useContext(RestaurantContext);

  const handleAdd = () => {
    handleAddItems(dish);
  };

  const handleRemove = () => {
    handleRemoveItems(dish);
  };
};

export default DishCard;

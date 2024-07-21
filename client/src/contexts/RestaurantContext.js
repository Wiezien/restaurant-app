import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error.message);
      }
    };

    fetchRestaurants();
  }, []);

  const handleAddItems = (dish) => {
    console.log("Dish:", dish);
  };

  const existingItemIndex = cartItems.findIndex(
    (item) => item._id === dish._id
  );

  if (existingItemIndex !== -1) {
    console.log(
      `Dish already exists in the cart. 
        You may want to update the quantity.`
    );
  }
};

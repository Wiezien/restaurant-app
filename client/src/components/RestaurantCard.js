import React from "react";

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{restaurant.name}</h3>
      <div>
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantCard;

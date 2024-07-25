const RestaurantList = () => {
  const { restaurants, setSelectedRestaurant } = useContext(RestaurantContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState([
    ...restaurants,
  ]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
};
useEffect(() => {
  filterRestaurants();
}, [ratingFilter, searchTerm, restaurants]);

const handleRestaurantClick = (restaurantId) => {
  setSelectedRestaurant(
    restaurants.find((restaurant) => restaurant._id === restaurantId)
  );
};

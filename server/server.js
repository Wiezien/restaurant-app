const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("Your mongodb connection string", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  menu: [
    {
      name: String,
      price: Number,
      image: String,
    },
  ],
  rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

const seedData = [
  {
    name: "Italian Delight",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Pasta Alfredo",
        price: 10,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004646/file.jpg",
      },
      {
        name: "Margherita Pizza",
        price: 15,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004646/file.jpg",
      },
      {
        name: "Chicken Parmesan",
        price: 20,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004646/file.jpg",
      },
    ],
    rating: 4.5,
  },
  {
    name: "Seafood Paradise",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Grilled Salmon",
        price: 12,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Lobster Bisque",
        price: 18,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Shrimp Scampi",
        price: 25,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 3.8,
  },
  {
    name: "Vegetarian Haven",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Quinoa Salad",
        price: 8,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Eggplant Parmesan",
        price: 12,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Mushroom Risotto",
        price: 16,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 4.2,
  },
  {
    name: "Sizzling Steakhouse",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Filet Mignon",
        price: 22,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "New York Strip",
        price: 18,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Ribeye Steak",
        price: 25,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 4.7,
  },
];

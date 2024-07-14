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

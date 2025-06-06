const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  hotel_name: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String, required: true },
  table_capacity: { type: Number, required: false },
  availability: { type: Map, of: Boolean, required: false },
  rating: { type: Number, required: false },
  email: { type: String, required: true },
});

const Restaurants = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurants;

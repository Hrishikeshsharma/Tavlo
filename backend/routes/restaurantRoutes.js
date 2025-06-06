const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    console.log("All restaurants:", restaurants); // ✅ print in terminal
    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

router.post("/", async (req, res) => {
  const { hotel_name, email, address, location, type } = req.body;

  const exists = await Restaurants.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "Email already registered" });
  }
  try {
    const newRestaurant = new Restaurants({
      hotel_name,
      email,
      address,
      location,
      type,
    });
    await newRestaurant.save();
    res.status(200).json({ message: "Restaurant registered" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

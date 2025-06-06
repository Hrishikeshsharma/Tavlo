const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const userBookings = await Book.find();
    console.log("All bookings:", userBookings);
    res.json(userBookings);
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

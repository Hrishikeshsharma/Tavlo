const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");
const Book = require("../models/Book");

router.post("/book", async (req, res) => {
  const { bookId, resto, members, slot, customerName, email, forDate } =
    req.body;
  console.log("Booking request body:", req.body);

  try {
    const restaurant = await Restaurants.findOne({ hotel_name: resto });

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const isAvailable = restaurant.availability.get(slot);

    if (restaurant.table_capacity >= members && isAvailable === true) {
      await restaurant.save();

      // Save booking
      const booking = new Book({
        bookId,
        customerName,
        restaurant: resto,
        members,
        slot,
        email,
        forDate,
      });

      await booking.save();

      return res.status(200).json({ message: "Booking confirmed" });
    } else {
      return res.status(400).json({ message: "Table not available" });
    }
  } catch (error) {
    console.error("Booking error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

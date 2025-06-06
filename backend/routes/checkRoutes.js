const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");

router.post("/check", async (req, res) => {
  const { resto, members, slot } = req.body;

  try {
    const exist = await Restaurants.findOne({ hotel_name: resto });

    if (!exist) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    if (
      exist.table_capacity >= members &&
      exist.availability.get(slot) === true
    ) {
      return res.status(200).json({ message: "Table available. Book now!" });
    } else {
      return res.status(200).json({ message: "Table not available" });
    }
  } catch (error) {
    console.error("Error checking table availability:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

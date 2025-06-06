const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const { bookingId, items, total, email, orderNumber } = req.body;
    console.log(req.body);
    existingOrders = await Order.countDocuments({ bookingId });
    console.log("📥 Received Order Data:", {
      bookingId,
      items,
      total,
      email,
      orderNumber,
    });
    const newOrder = new Order({
      bookingId,
      items,
      total,
      email,
      orderNumber: existingOrders + 1,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save order", error: err });
  }
});

router.get("/", async (req, res) => {
  const { bookingId } = req.query;
  try {
    myOrders = await Order.find({ bookingId }).sort({ orderNumber: 1 });
    console.log(myOrders);
    res.json(myOrders);
  } catch (error) {
    console.error("Error fetching orders", error);
  }
});

module.exports = router;

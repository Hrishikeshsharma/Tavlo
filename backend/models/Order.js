const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
  },
  email: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  orderNumber: Number,
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: String,
  restaurant: String,
  members: Number,
  slot: String,
  date: { type: Date, default: Date.now },
  email: { type: String },
  forDate: { type: Date },
});

module.exports = mongoose.model("Booking", bookingSchema);

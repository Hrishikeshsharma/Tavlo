const mongoose = require("mongoose");
const userBookingSchema = new mongoose.Schema({
  email: String,
  customerName: String,
  restaurantName: String,
  date: { type: Date, default: Date.now },
  timeSlot: String,
  noGuests: Number,
});

const UserBooking = mongoose.model("UserBooking", userBookingSchema);
module.exports = UserBooking;

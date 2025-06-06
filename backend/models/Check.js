const mongoose = require("mongoose");

const checkingSchema = new mongoose.Schema({
  hotel_name: String,
  table_capacity: Number,
  availability: { type: Map, of: Boolean },
});

const Checking = mongoose.model("Checking", checkingSchema);
module.exports = Checking;

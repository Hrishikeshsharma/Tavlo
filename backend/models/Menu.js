const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({}, { strict: false });

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;

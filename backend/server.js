const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const checkRoutes = require("./routes/checkRoutes");
const bookRoutes = require("./routes/bookRoutes");
const ownerAuthRoutes = require("./routes/ownerAuthRoutes");
const userBookingsRoutes = require("./routes/userBookingsRoutes");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/table-booking-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB connected"));

// Use auth routes
app.use("/autho", authRoutes);
app.use("/hotels", restaurantRoutes);
app.use("/booking", checkRoutes);
app.use("/booking", bookRoutes);
app.use("/owner", ownerAuthRoutes);
app.use("/booking/book", userBookingsRoutes);
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

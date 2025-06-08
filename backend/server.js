const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
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

require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/autho", authRoutes);
app.use("/hotels", restaurantRoutes);
app.use("/booking", checkRoutes);
app.use("/booking", bookRoutes);
app.use("/owner", ownerAuthRoutes);
app.use("/booking/book", userBookingsRoutes);
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html")); // or "build"
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

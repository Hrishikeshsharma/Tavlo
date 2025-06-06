const express = require("express");
const router = express.Router();
const Owner = require("../models/Owner");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const exists = await Owner.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const newOwner = new Owner({ name, email, password });
    await newOwner.save();
    res.status(200).json({ message: "Sign up successful" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const owner = await Owner.findOne({ email });
    if (!owner) {
      return res.status(400).json({ message: "Owner not found" });
    }

    if (owner.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    res.status(200).json({
      message: "Log in successful",
      owner: { name: owner.name, email: owner.email },
    });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;

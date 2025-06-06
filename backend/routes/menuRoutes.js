const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find();
    console.log(Menu);
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: "Menu fetch failed" });
  }
});

module.exports = router;

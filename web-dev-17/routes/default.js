const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", async function (req, res) {
  const [products] = await db.query("SELECT * FROM products");

  res.render("index", { products: products });
});

router.get("/font-license", function (req, res) {
  res.render("font-license");
});

router.get("/image-license", function (req, res) {
  res.render("image-license");
});

module.exports = router;

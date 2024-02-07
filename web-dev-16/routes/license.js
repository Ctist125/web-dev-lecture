const express = require("express");

const router = express.Router();

router.get("/font-license", function (req, res) {
  res.render("font-license");
});

router.get("/image-license", function (req, res) {
  res.render("image-license");
});

module.exports = router;

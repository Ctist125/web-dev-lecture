const express = require("express");

const resData = require("../util/file-data");

const router = express.Router();

router.get("/", function (req, res) {
  const storedReviews = resData.getFileData("review.json");

  res.render("index", { reviews: storedReviews });
});

router.get("/menu", function (req, res) {
  const storedMenus = resData.getFileData("menu.json");

  res.render("menu", { menus: storedMenus });
});

router.get("/shopping-basket", function (req, res) {
  res.render("shopping-basket");
});

module.exports = router;

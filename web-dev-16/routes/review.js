const express = require("express");

const resData = require("../util/file-data");

const router = express.Router();

router.get("/review", function (req, res) {
  const storedReviews = resData.getFileData("review.json");

  res.render("review", { reviews: storedReviews });
});

router.get("/review/:title", function (req, res) {
  const reviewDetailId = req.params.title;

  const storedReviews = resData.getFileData("review.json");

  for (const review of storedReviews) {
    if (review.review === reviewDetailId) {
      return res.render("review-detail", { review: review });
    }
  }
});

module.exports = router;

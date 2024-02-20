const express = require("express");
const mongodb = require("mongodb");

const db = require("../data/database");

const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get("/", async function (req, res) {
  // User name: Tief로 로그인이 되어있다는 가정
  const user = await db
    .getDb()
    .collection("user")
    .find({ name: "Tief" })
    .toArray();
  const weeklyPopularityPosts = await db
    .getDb()
    .collection("weeklyPopularity")
    .find()
    .toArray();
  const userAttendance = await db
    .getDb()
    .collection("attendance")
    .find()
    .toArray();
  const freeBoardPosts = await db
    .getDb()
    .collection("freeBoard")
    .find()
    .toArray();

  res.render("index", {
    user: user,
    weeklyPopularityPosts: weeklyPopularityPosts,
    userAttendance: userAttendance,
    freeBoardPosts: freeBoardPosts,
  });
});

router.get("/writing", function (req, res) {
  res.render("writing");
});

router.post("/writing", async function (req, res) {
  // User name: Tief로 로그인이 되어있다는 가정
  const user = await db
    .getDb()
    .collection("user")
    .find({ name: "Tief" })
    .toArray();

  const postInformations = {
    title: req.body.title,
    body: req.body.body,
    writer: {
      userId: user[0]._id,
      userName: user[0].name,
    },
  };

  const result = await db
    .getDb()
    .collection("freeBoard")
    .insertOne(postInformations);

  res.redirect("/");
});

router.get("/my-writing/:id", async function (req, res) {
  // User name: Tief로 로그인이 되어있다는 가정
  const user = await db
    .getDb()
    .collection("user")
    .find({ name: "Tief" })
    .toArray();

  res.render("my-writing", { user: user });
});

router.get("/post-detail/:id", function (req, res) {
  res.render("post-detail");
});

router.get("/font-license", function (req, res) {
  res.render("font-license");
});

router.get("/image-license", function (req, res) {
  res.render("image-license");
});

module.exports = router;

const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  const filePath = path.join(__dirname, "data", "post.json");

  const fileData = fs.readFileSync(filePath);
  const storedPost = JSON.parse(fileData);

  res.render("index", {
    posts: storedPost,
  });
});

app.get("/posting", function (req, res) {
  res.render("posting");
});

app.post("/posting", function (req, res) {
  const post = req.body;
  const filePath = path.join(__dirname, "data", "post.json");

  const fileData = fs.readFileSync(filePath);
  const storedPost = JSON.parse(fileData);

  storedPost.push(post);

  fs.writeFileSync(filePath, JSON.stringify(storedPost));

  res.redirect("/");
});

app.get("/post-content", function (req, res) {
  res.render("post-content");
});

app.listen(3000);

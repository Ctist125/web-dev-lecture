const path = require("path");

const express = require("express");

const db = require("./data/database");

const defaultRoutes = require("./routes/default");
const buyRoutes = require("./routes/buy");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", defaultRoutes);
app.use("/", buyRoutes);

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).render("500");
});

app.listen(3000);

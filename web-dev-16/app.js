const path = require("path");

const express = require("express");

const defaultRoutes = require("./routes/default");
const reviewRoutes = require("./routes/review");
const licenseRoutes = require("./routes/license");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", defaultRoutes);
app.use("/", reviewRoutes);
app.use("/", licenseRoutes);

app.listen(3000);

const express = require("express");
const multer = require("multer");

const db = require("../data/database");

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/client/profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storageConfig });
const router = express.Router();

router.get("/", async function (req, res) {
  const [users] = await db.query("SELECT * FROM user");

  res.render("index", { users: users });
});

router.get("/writing", function (req, res) {
  res.render("writing");
});

router.post("/writing", upload.single("imagePath"), async function (req, res) {
  const uploadImageFile = req.file;

  const query = `
    INSERT INTO user (name, department, class, description, imagePath) VALUES (?)
  `;

  if (!uploadImageFile || uploadImageFile.length === 0) {
    const userInformations = [
      req.body.name,
      req.body.department,
      req.body.class,
      req.body.description,
      "/images/server/icons/profile-image.png",
    ];

    const result = await db.query(query, [userInformations]);

    return res.redirect("/");
  } else {
    const userInformations = [
      req.body.name,
      req.body.department,
      req.body.class,
      req.body.description,
      uploadImageFile.path,
    ];

    const result = await db.query(query, [userInformations]);

    return res.redirect("/");
  }
});

router.get("/font-license", function (req, res) {
  res.render("font-license");
});

router.get("/image-license", function (req, res) {
  res.render("image-license");
});

module.exports = router;
